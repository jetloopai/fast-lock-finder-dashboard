import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { ShieldCheck, Plus, Pencil } from "lucide-react";
import type { Profile, UserRole } from "@/types/profiles";

interface ProfileWithLocksmith extends Profile {
  locksmiths: { id: string; name: string } | null;
}

interface Locksmith {
  id: string;
  name: string;
}

const roleBadge: Record<string, "default" | "secondary" | "outline"> = {
  owner: 'default', dispatcher: 'secondary', technician: 'outline',
};

export default function Users() {
  const { toast } = useToast();
  const [users,       setUsers]       = useState<ProfileWithLocksmith[]>([]);
  const [locksmiths,  setLocksmiths]  = useState<Locksmith[]>([]);
  const [loading,     setLoading]     = useState(true);
  const [editUser,    setEditUser]    = useState<ProfileWithLocksmith | null>(null);
  const [inviteOpen,  setInviteOpen]  = useState(false);
  const [invite,      setInvite]      = useState({ email: '', password: '', name: '', role: 'dispatcher' as UserRole, locksmith_id: '' });
  const [saving,      setSaving]      = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const [{ data: profileData }, { data: lsData }] = await Promise.all([
      supabase.from('profiles').select('*, locksmiths(id, name)').order('created_at'),
      supabase.from('locksmiths').select('id, name').eq('active', true).order('name'),
    ]);
    if (profileData) setUsers(profileData as unknown as ProfileWithLocksmith[]);
    if (lsData)      setLocksmiths(lsData);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const saveEdit = async () => {
    if (!editUser) return;
    setSaving(true);
    const { error } = await supabase
      .from('profiles')
      .update({ role: editUser.role, locksmith_id: editUser.locksmith_id || null })
      .eq('id', editUser.id);
    if (error) toast({ variant: 'destructive', title: 'Error', description: error.message });
    else { toast({ title: 'User updated' }); setEditUser(null); fetchData(); }
    setSaving(false);
  };

  const createUser = async () => {
    setSaving(true);
    try {
      // Sign up via public endpoint (profile trigger handles the rest)
      const { data, error: signUpErr } = await supabase.auth.signUp({
        email: invite.email,
        password: invite.password,
        options: { data: { name: invite.name } },
      });
      if (signUpErr) throw signUpErr;
      if (data.user) {
        // Confirm email + set role via management API (our run-migration pattern)
        // For now: update the profile directly after a short delay for trigger to fire
        await new Promise(r => setTimeout(r, 1000));
        await supabase
          .from('profiles')
          .update({
            role:        invite.role,
            locksmith_id: invite.locksmith_id || null,
            name:        invite.name,
            email:       invite.email,
          })
          .eq('id', data.user.id);
      }
      toast({ title: 'User created', description: `${invite.email} added as ${invite.role}` });
      setInviteOpen(false);
      setInvite({ email: '', password: '', name: '', role: 'dispatcher', locksmith_id: '' });
      fetchData();
    } catch (err: unknown) {
      toast({ variant: 'destructive', title: 'Error', description: (err as Error).message });
    }
    setSaving(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <ShieldCheck className="w-6 h-6" /> User Management
          </h1>
          <p className="text-muted-foreground">Manage roles and access</p>
        </div>
        <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
          <DialogTrigger asChild>
            <Button><Plus className="w-4 h-4 mr-2" /> Add User</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Add New User</DialogTitle></DialogHeader>
            <div className="space-y-4 pt-2">
              <div className="space-y-1">
                <Label>Full Name</Label>
                <Input value={invite.name} onChange={e => setInvite(p => ({ ...p, name: e.target.value }))} />
              </div>
              <div className="space-y-1">
                <Label>Email</Label>
                <Input type="email" value={invite.email} onChange={e => setInvite(p => ({ ...p, email: e.target.value }))} />
              </div>
              <div className="space-y-1">
                <Label>Temporary Password</Label>
                <Input type="password" value={invite.password} onChange={e => setInvite(p => ({ ...p, password: e.target.value }))} />
              </div>
              <div className="space-y-1">
                <Label>Role</Label>
                <Select value={invite.role} onValueChange={v => setInvite(p => ({ ...p, role: v as UserRole }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="owner">Owner</SelectItem>
                    <SelectItem value="dispatcher">Dispatcher</SelectItem>
                    <SelectItem value="technician">Technician</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {invite.role === 'technician' && (
                <div className="space-y-1">
                  <Label>Link to Locksmith</Label>
                  <Select value={invite.locksmith_id} onValueChange={v => setInvite(p => ({ ...p, locksmith_id: v }))}>
                    <SelectTrigger><SelectValue placeholder="Select locksmith..." /></SelectTrigger>
                    <SelectContent>
                      {locksmiths.map(l => <SelectItem key={l.id} value={l.id}>{l.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              )}
              <Button className="w-full" onClick={createUser} disabled={saving || !invite.email || !invite.password}>
                {saving ? 'Creating...' : 'Create User'}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader><CardTitle>All Users ({users.length})</CardTitle></CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left">
                    <th className="pb-3 font-medium">Name</th>
                    <th className="pb-3 font-medium">Email</th>
                    <th className="pb-3 font-medium">Role</th>
                    <th className="pb-3 font-medium">Linked Locksmith</th>
                    <th className="pb-3 font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(u => (
                    <tr key={u.id} className="border-b hover:bg-muted/30">
                      <td className="py-3">{u.name || '—'}</td>
                      <td className="py-3 text-muted-foreground">{u.email || '—'}</td>
                      <td className="py-3">
                        <Badge variant={roleBadge[u.role]} className="capitalize">{u.role}</Badge>
                      </td>
                      <td className="py-3">{u.locksmiths?.name || '—'}</td>
                      <td className="py-3 text-right">
                        <Button variant="ghost" size="sm" onClick={() => setEditUser(u)}>
                          <Pencil className="w-3 h-3" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit dialog */}
      <Dialog open={!!editUser} onOpenChange={open => !open && setEditUser(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Edit User — {editUser?.name || editUser?.email}</DialogTitle></DialogHeader>
          {editUser && (
            <div className="space-y-4 pt-2">
              <div className="space-y-1">
                <Label>Role</Label>
                <Select value={editUser.role} onValueChange={v => setEditUser(p => p ? { ...p, role: v as UserRole } : p)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="owner">Owner</SelectItem>
                    <SelectItem value="dispatcher">Dispatcher</SelectItem>
                    <SelectItem value="technician">Technician</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {editUser.role === 'technician' && (
                <div className="space-y-1">
                  <Label>Linked Locksmith</Label>
                  <Select
                    value={editUser.locksmith_id || ''}
                    onValueChange={v => setEditUser(p => p ? { ...p, locksmith_id: v } : p)}
                  >
                    <SelectTrigger><SelectValue placeholder="Select locksmith..." /></SelectTrigger>
                    <SelectContent>
                      {locksmiths.map(l => <SelectItem key={l.id} value={l.id}>{l.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              )}
              <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={() => setEditUser(null)}>Cancel</Button>
                <Button onClick={saveEdit} disabled={saving}>{saving ? 'Saving...' : 'Save'}</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

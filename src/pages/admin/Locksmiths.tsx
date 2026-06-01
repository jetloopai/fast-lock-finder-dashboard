import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Edit, MapPin, Phone, Mail, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useToast } from "@/hooks/use-toast";

interface Locksmith {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  active: boolean;
  assigned_zips: string[];
  payment_method: string | null;
  default_cut_percent: number;
  escalation_priority: number;
  role: string | null;
  created_at: string;
}

const Locksmiths = () => {
  const [locksmiths, setLocksmiths] = useState<Locksmith[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingLocksmith, setEditingLocksmith] = useState<Locksmith | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    active: true,
    assigned_zips: "",
    payment_method: "",
    default_cut_percent: 40,
    escalation_priority: 1,
    role: "technician",
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchLocksmiths();
  }, []);

  const fetchLocksmiths = async () => {
    try {
      const { data, error } = await supabase
        .from("locksmiths")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setLocksmiths(data || []);
    } catch (error) {
      console.error("Error fetching locksmiths:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load locksmiths",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const zipArray = formData.assigned_zips
        .split(",")
        .map(zip => zip.trim())
        .filter(zip => zip !== "");

      const locksmithData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email || null,
        active: formData.active,
        assigned_zips: zipArray,
        payment_method: formData.payment_method || null,
        default_cut_percent: formData.default_cut_percent,
        escalation_priority: formData.escalation_priority,
        role: formData.role,
      };

      if (editingLocksmith) {
        const { error } = await supabase
          .from("locksmiths")
          .update(locksmithData)
          .eq("id", editingLocksmith.id);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Locksmith updated successfully",
        });
      } else {
        const { error } = await supabase
          .from("locksmiths")
          .insert([locksmithData]);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Locksmith added successfully",
        });
      }

      setIsDialogOpen(false);
      setEditingLocksmith(null);
      resetForm();
      fetchLocksmiths();
    } catch (error) {
      console.error("Error saving locksmith:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save locksmith",
      });
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      active: true,
      assigned_zips: "",
      payment_method: "",
      default_cut_percent: 40,
      escalation_priority: 1,
      role: "technician",
    });
  };

  const handleEdit = (locksmith: Locksmith) => {
    setEditingLocksmith(locksmith);
    setFormData({
      name: locksmith.name,
      phone: locksmith.phone,
      email: locksmith.email || "",
      active: locksmith.active,
      assigned_zips: locksmith.assigned_zips.join(", "),
      payment_method: locksmith.payment_method || "",
      default_cut_percent: locksmith.default_cut_percent,
      escalation_priority: locksmith.escalation_priority ?? 1,
      role: locksmith.role || "technician",
    });
    setIsDialogOpen(true);
  };

  const toggleActive = async (locksmith: Locksmith) => {
    try {
      const { error } = await supabase
        .from("locksmiths")
        .update({ active: !locksmith.active })
        .eq("id", locksmith.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Locksmith ${!locksmith.active ? "activated" : "deactivated"}`,
      });

      fetchLocksmiths();
    } catch (error) {
      console.error("Error updating locksmith status:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update locksmith status",
      });
    }
  };

  const filteredLocksmiths = locksmiths.filter(locksmith =>
    locksmith.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    locksmith.phone.includes(searchTerm) ||
    locksmith.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Locksmiths - FastLockFinder Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Locksmiths</h2>
            <p className="text-muted-foreground">
              Manage your locksmith team
            </p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => { resetForm(); setEditingLocksmith(null); }}>
                <Plus className="w-4 h-4 mr-2" />
                Add Locksmith
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>
                  {editingLocksmith ? "Edit Locksmith" : "Add New Locksmith"}
                </DialogTitle>
                <DialogDescription>
                  {editingLocksmith ? "Update locksmith information" : "Add a new locksmith to your team"}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zips">Assigned ZIP Codes (comma-separated)</Label>
                  <Input
                    id="zips"
                    placeholder="60601, 60602, 60603"
                    value={formData.assigned_zips}
                    onChange={(e) => setFormData({ ...formData, assigned_zips: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payment">Payment Method</Label>
                  <Input
                    id="payment"
                    placeholder="Venmo, PayPal, Check, etc."
                    value={formData.payment_method}
                    onChange={(e) => setFormData({ ...formData, payment_method: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cut">Tech Cut % (their share)</Label>
                  <Input
                    id="cut"
                    type="number"
                    min="0"
                    max="100"
                    value={formData.default_cut_percent}
                    onChange={(e) => setFormData({ ...formData, default_cut_percent: Number(e.target.value) })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="priority">Call Order</Label>
                    <Input
                      id="priority"
                      type="number"
                      min="0"
                      placeholder="0=first, 1=second..."
                      value={formData.escalation_priority}
                      onChange={(e) => setFormData({ ...formData, escalation_priority: Number(e.target.value) })}
                    />
                    <p className="text-xs text-muted-foreground">0 = rings first on new jobs</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <select
                      id="role"
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    >
                      <option value="dispatcher">Dispatcher</option>
                      <option value="technician">Technician</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="active"
                    checked={formData.active}
                    onCheckedChange={(checked) => setFormData({ ...formData, active: checked })}
                  />
                  <Label htmlFor="active">Active</Label>
                </div>
                <Button type="submit" className="w-full">
                  {editingLocksmith ? "Update Locksmith" : "Add Locksmith"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search locksmiths..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Locksmiths Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Locksmiths ({filteredLocksmiths.length})</CardTitle>
            <CardDescription>
              Manage your locksmith team and their assignments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Call Order</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>ZIP Codes</TableHead>
                  <TableHead>Cut %</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLocksmiths.map((locksmith) => (
                  <TableRow key={locksmith.id}>
                    <TableCell className="font-medium">{locksmith.name}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-sm">
                          <Phone className="h-3 w-3" />
                          {locksmith.phone}
                        </div>
                        {locksmith.email && (
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Mail className="h-3 w-3" />
                            {locksmith.email}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={locksmith.role === 'dispatcher' ? 'default' : 'secondary'} className="capitalize">
                        {locksmith.role || 'technician'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center font-mono text-sm">
                      #{locksmith.escalation_priority ?? '—'}
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={locksmith.active ? "default" : "secondary"}
                        className="cursor-pointer"
                        onClick={() => toggleActive(locksmith)}
                      >
                        {locksmith.active ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm">
                        <MapPin className="h-3 w-3" />
                        {locksmith.assigned_zips.length > 0 
                          ? locksmith.assigned_zips.join(", ")
                          : "No assignments"
                        }
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm">
                        <DollarSign className="h-3 w-3" />
                        {locksmith.default_cut_percent}%
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(locksmith)}
                      >
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Locksmiths;
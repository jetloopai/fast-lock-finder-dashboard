import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Copy, Clock, AlertCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useToast } from "@/hooks/use-toast";

interface DispatchCode {
  id: string;
  code: string;
  status: string;
  lead_id: string | null;
  locksmith_id: string | null;
  expiration_time: string | null;
  created_at: string;
}

interface Lead {
  id: string;
  name: string | null;
  phone: string;
}

interface Locksmith {
  id: string;
  name: string;
}

const DispatchCodes = () => {
  const [codes, setCodes] = useState<DispatchCode[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [locksmiths, setLocksmiths] = useState<Locksmith[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    code: "",
    lead_id: "",
    locksmith_id: "",
    expiration_hours: 24,
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchDispatchCodes();
    fetchLeads();
    fetchLocksmiths();
  }, []);

  const fetchDispatchCodes = async () => {
    try {
      const { data, error } = await supabase
        .from("dispatch_codes")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setCodes(data || []);
    } catch (error) {
      console.error("Error fetching dispatch codes:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load dispatch codes",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from("leads")
        .select("id, name, phone")
        .eq("status", "new");

      if (error) throw error;
      setLeads(data || []);
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };

  const fetchLocksmiths = async () => {
    try {
      const { data, error } = await supabase
        .from("locksmiths")
        .select("id, name")
        .eq("active", true);

      if (error) throw error;
      setLocksmiths(data || []);
    } catch (error) {
      console.error("Error fetching locksmiths:", error);
    }
  };

  const generateCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setFormData({ ...formData, code: result });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const expirationTime = new Date();
      expirationTime.setHours(expirationTime.getHours() + formData.expiration_hours);

      const codeData = {
        code: formData.code,
        lead_id: formData.lead_id || null,
        locksmith_id: formData.locksmith_id || null,
        expiration_time: expirationTime.toISOString(),
        status: "new" as const,
      };

      const { error } = await supabase
        .from("dispatch_codes")
        .insert([codeData]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Dispatch code created successfully",
      });

      setIsDialogOpen(false);
      resetForm();
      fetchDispatchCodes();
    } catch (error) {
      console.error("Error creating dispatch code:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create dispatch code",
      });
    }
  };

  const resetForm = () => {
    setFormData({
      code: "",
      lead_id: "",
      locksmith_id: "",
      expiration_hours: 24,
    });
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied",
      description: "Dispatch code copied to clipboard",
    });
  };

  const updateCodeStatus = async (codeId: string, status: "new" | "in_progress" | "complete" | "expired") => {
    try {
      const { error } = await supabase
        .from("dispatch_codes")
        .update({ status })
        .eq("id", codeId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Code status updated",
      });

      fetchDispatchCodes();
    } catch (error) {
      console.error("Error updating code status:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update code status",
      });
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "new": return "default";
      case "assigned": return "secondary";
      case "used": return "outline";
      case "expired": return "destructive";
      default: return "secondary";
    }
  };

  const isExpired = (expirationTime: string | null) => {
    if (!expirationTime) return false;
    return new Date(expirationTime) < new Date();
  };

  const filteredCodes = codes.filter(code => {
    const matchesSearch = code.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || code.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
        <title>Dispatch Codes - FastLockFinder Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Dispatch Codes</h2>
            <p className="text-muted-foreground">
              Generate and manage dispatch codes for jobs
            </p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="w-4 h-4 mr-2" />
                Generate Code
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Generate Dispatch Code</DialogTitle>
                <DialogDescription>
                  Create a new dispatch code for a job assignment
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="code">Code</Label>
                  <div className="flex gap-2">
                    <Input
                      id="code"
                      value={formData.code}
                      onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                      placeholder="Auto-generated"
                      required
                    />
                    <Button type="button" onClick={generateCode} variant="outline">
                      Generate
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lead">Lead (Optional)</Label>
                  <Select value={formData.lead_id} onValueChange={(value) => setFormData({ ...formData, lead_id: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select lead" />
                    </SelectTrigger>
                    <SelectContent>
                      {leads.map((lead) => (
                        <SelectItem key={lead.id} value={lead.id}>
                          {lead.name || lead.phone}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="locksmith">Locksmith (Optional)</Label>
                  <Select value={formData.locksmith_id} onValueChange={(value) => setFormData({ ...formData, locksmith_id: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select locksmith" />
                    </SelectTrigger>
                    <SelectContent>
                      {locksmiths.map((locksmith) => (
                        <SelectItem key={locksmith.id} value={locksmith.id}>
                          {locksmith.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expiration">Expiration (Hours)</Label>
                  <Input
                    id="expiration"
                    type="number"
                    min="1"
                    max="168"
                    value={formData.expiration_hours}
                    onChange={(e) => setFormData({ ...formData, expiration_hours: Number(e.target.value) })}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Generate Code
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <div className="flex gap-4">
          <Card className="flex-1">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search codes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="assigned">Assigned</SelectItem>
                  <SelectItem value="used">Used</SelectItem>
                  <SelectItem value="expired">Expired</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        {/* Codes Table */}
        <Card>
          <CardHeader>
            <CardTitle>Dispatch Codes ({filteredCodes.length})</CardTitle>
            <CardDescription>
              Generated codes and their current status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Code</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Expiration</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCodes.map((code) => (
                  <TableRow key={code.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                          {code.code}
                        </code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(code.code)}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Select value={code.status} onValueChange={(value) => updateCodeStatus(code.id, value)}>
                        <SelectTrigger className="w-32">
                          <Badge variant={getStatusBadgeVariant(code.status)}>
                            {isExpired(code.expiration_time) && code.status !== "used" ? "expired" : code.status}
                          </Badge>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="assigned">Assigned</SelectItem>
                          <SelectItem value="used">Used</SelectItem>
                          <SelectItem value="expired">Expired</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {isExpired(code.expiration_time) ? (
                          <AlertCircle className="h-3 w-3 text-destructive" />
                        ) : (
                          <Clock className="h-3 w-3 text-muted-foreground" />
                        )}
                        <span className={`text-sm ${isExpired(code.expiration_time) ? 'text-destructive' : ''}`}>
                          {code.expiration_time 
                            ? new Date(code.expiration_time).toLocaleString()
                            : "No expiration"
                          }
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(code.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View Details
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

export default DispatchCodes;
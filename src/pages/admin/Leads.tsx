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
import { Plus, Search, Eye, UserCheck, Phone, MapPin, Briefcase } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileLeadCard } from "@/components/admin/MobileLeadCard";

interface Lead {
  id: string;
  name: string | null;
  phone: string;
  service_type: string | null;
  zip: string | null;
  status: string;
  created_at: string;
  assigned_locksmith_id: string | null;
  dispatch_code_id: string | null;
}

interface Locksmith {
  id: string;
  name: string;
  active: boolean;
}

const Leads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [locksmiths, setLocksmiths] = useState<Locksmith[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service_type: "",
    zip: "",
    status: "new" as const,
  });
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    fetchLeads();
    fetchLocksmiths();
  }, []);

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (error) {
      console.error("Error fetching leads:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load leads",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchLocksmiths = async () => {
    try {
      const { data, error } = await supabase
        .from("locksmiths")
        .select("id, name, active")
        .eq("active", true);

      if (error) throw error;
      setLocksmiths(data || []);
    } catch (error) {
      console.error("Error fetching locksmiths:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from("leads")
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Lead added successfully",
      });

      setIsDialogOpen(false);
      resetForm();
      fetchLeads();
    } catch (error) {
      console.error("Error saving lead:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save lead",
      });
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      service_type: "",
      zip: "",
      status: "new",
    });
  };

  const assignLocksmith = async (leadId: string, locksmithId: string) => {
    try {
      const { error } = await supabase
        .from("leads")
        .update({ 
          assigned_locksmith_id: locksmithId,
          status: "in_progress"
        })
        .eq("id", leadId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Lead assigned successfully",
      });

      fetchLeads();
    } catch (error) {
      console.error("Error assigning lead:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to assign lead",
      });
    }
  };

  const updateStatus = async (leadId: string, status: "new" | "missed" | "in_progress" | "complete") => {
    try {
      const { error } = await supabase
        .from("leads")
        .update({ status })
        .eq("id", leadId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Lead status updated",
      });

      fetchLeads();
    } catch (error) {
      console.error("Error updating lead status:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update lead status",
      });
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "new": return "default";
      case "assigned": return "secondary";
      case "in_progress": return "outline";
      case "completed": return "default";
      case "cancelled": return "destructive";
      default: return "secondary";
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm) ||
      lead.service_type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.zip?.includes(searchTerm);
    
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    
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
        <title>Leads - FastLockFinder Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Leads</h2>
            <p className="text-muted-foreground">
              Manage customer leads and assignments
            </p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="w-4 h-4 mr-2" />
                Add Lead
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Lead</DialogTitle>
                <DialogDescription>
                  Add a new customer lead to the system
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Customer Name</Label>
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
                  <Label htmlFor="service">Service Type</Label>
                  <Select value={formData.service_type} onValueChange={(value) => setFormData({ ...formData, service_type: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emergency">Emergency Lockout</SelectItem>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="automotive">Automotive</SelectItem>
                      <SelectItem value="rekeying">Rekeying</SelectItem>
                      <SelectItem value="smart_locks">Smart Locks</SelectItem>
                      <SelectItem value="key_duplication">Key Duplication</SelectItem>
                      <SelectItem value="safes">Safes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input
                    id="zip"
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    placeholder="60601"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Add Lead
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <div className={`flex gap-4 ${isMobile ? 'flex-col' : ''}`}>
          <Card className="flex-1">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search leads..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>
          <Card className={isMobile ? 'w-full' : ''}>
            <CardContent className="pt-6">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className={isMobile ? 'w-full' : 'w-40'}>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="assigned">Assigned</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        {/* Leads Display */}
        {isMobile ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">All Leads ({filteredLeads.length})</h3>
            </div>
            <div className="space-y-3">
              {filteredLeads.map((lead) => (
                <MobileLeadCard
                  key={lead.id}
                  lead={lead}
                  locksmiths={locksmiths}
                  onStatusUpdate={updateStatus}
                  onAssignLocksmith={assignLocksmith}
                  getStatusBadgeVariant={getStatusBadgeVariant}
                />
              ))}
            </div>
          </div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>All Leads ({filteredLeads.length})</CardTitle>
              <CardDescription>
                Customer leads and their current status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLeads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium">{lead.name || "Unknown"}</div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Phone className="h-3 w-3" />
                            {lead.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          {lead.service_type || "Not specified"}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {lead.zip || "No location"}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Select value={lead.status} onValueChange={(value) => updateStatus(lead.id, value as "new" | "missed" | "in_progress" | "complete")}>
                          <SelectTrigger className="w-32">
                            <Badge variant={getStatusBadgeVariant(lead.status)}>
                              {lead.status}
                            </Badge>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="assigned">Assigned</SelectItem>
                            <SelectItem value="in_progress">In Progress</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {new Date(lead.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Select onValueChange={(value) => assignLocksmith(lead.id, value)}>
                            <SelectTrigger className="w-32">
                              <SelectValue placeholder="Assign" />
                            </SelectTrigger>
                            <SelectContent>
                              {locksmiths.map((locksmith) => (
                                <SelectItem key={locksmith.id} value={locksmith.id}>
                                  {locksmith.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Button variant="outline" size="sm">
                            <Eye className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default Leads;
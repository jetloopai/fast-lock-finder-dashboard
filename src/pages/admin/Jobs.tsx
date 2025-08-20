import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, DollarSign, Clock, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useToast } from "@/hooks/use-toast";

interface Job {
  id: string;
  lead_id: string | null;
  locksmith_id: string | null;
  client_name: string | null;
  job_type: string | null;
  status: string;
  final_price: number | null;
  your_cut: number | null;
  their_cut: number | null;
  created_at: string;
  completed_at: string | null;
}

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const { toast } = useToast();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setJobs(data || []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load jobs",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateJobStatus = async (jobId: string, status: string) => {
    try {
      const updateData: any = { status };
      
      if (status === "completed") {
        updateData.completed_at = new Date().toISOString();
      }

      const { error } = await supabase
        .from("jobs")
        .update(updateData)
        .eq("id", jobId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Job status updated",
      });

      fetchJobs();
    } catch (error) {
      console.error("Error updating job status:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update job status",
      });
    }
  };

  const updateJobPricing = async (jobId: string, finalPrice: number, yourCut: number, theirCut: number) => {
    try {
      const { error } = await supabase
        .from("jobs")
        .update({
          final_price: finalPrice,
          your_cut: yourCut,
          their_cut: theirCut,
        })
        .eq("id", jobId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Job pricing updated",
      });

      fetchJobs();
    } catch (error) {
      console.error("Error updating job pricing:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update job pricing",
      });
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "in_progress": return "default";
      case "completed": return "default";
      case "cancelled": return "destructive";
      default: return "secondary";
    }
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = 
      job.client_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.job_type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.id.includes(searchTerm);
    
    const matchesStatus = statusFilter === "all" || job.status === statusFilter;
    
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
        <title>Jobs - FastLockFinder Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Jobs</h2>
          <p className="text-muted-foreground">
            Track job progress and manage payments
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-4">
          <Card className="flex-1">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search jobs..."
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
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        {/* Jobs Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Jobs ({filteredJobs.length})</CardTitle>
            <CardDescription>
              Job tracking and payment management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job ID</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Pricing</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredJobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell className="font-mono text-sm">
                      {job.id.substring(0, 8)}...
                    </TableCell>
                    <TableCell className="font-medium">
                      {job.client_name || "Unknown Client"}
                    </TableCell>
                    <TableCell>{job.job_type || "Not specified"}</TableCell>
                    <TableCell>
                      <Select value={job.status} onValueChange={(value) => updateJobStatus(job.id, value)}>
                        <SelectTrigger className="w-32">
                          <Badge variant={getStatusBadgeVariant(job.status)}>
                            {job.status === "in_progress" ? "In Progress" : job.status}
                          </Badge>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="in_progress">In Progress</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        {job.final_price ? (
                          <div className="flex items-center gap-1 text-sm">
                            <DollarSign className="h-3 w-3" />
                            ${job.final_price}
                          </div>
                        ) : (
                          <div className="text-sm text-muted-foreground">Not set</div>
                        )}
                        {job.your_cut && job.their_cut && (
                          <div className="text-xs text-muted-foreground">
                            You: ${job.your_cut} • Them: ${job.their_cut}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-sm">
                          <Clock className="h-3 w-3" />
                          {new Date(job.created_at).toLocaleDateString()}
                        </div>
                        {job.completed_at && (
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <CheckCircle className="h-3 w-3" />
                            {new Date(job.completed_at).toLocaleDateString()}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Edit Pricing
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${jobs.reduce((sum, job) => sum + (job.final_price || 0), 0).toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground">
                From {jobs.filter(j => j.final_price).length} completed jobs
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Your Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${jobs.reduce((sum, job) => sum + (job.your_cut || 0), 0).toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground">
                Your share of completed jobs
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Locksmith Payments</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${jobs.reduce((sum, job) => sum + (job.their_cut || 0), 0).toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground">
                Total paid to locksmiths
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Jobs;
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, UserCheck, Phone, Briefcase, AlertCircle, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useToast } from "@/hooks/use-toast";

interface DashboardStats {
  totalLocksmiths: number;
  activeLocksmiths: number;
  totalLeads: number;
  newLeads: number;
  totalJobs: number;
  activeJobs: number;
  totalCalls: number;
  todayCalls: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalLocksmiths: 0,
    activeLocksmiths: 0,
    totalLeads: 0,
    newLeads: 0,
    totalJobs: 0,
    activeJobs: 0,
    totalCalls: 0,
    todayCalls: 0,
  });
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch locksmiths stats
        const { data: locksmiths, error: locksmithError } = await supabase
          .from("locksmiths")
          .select("active");
        
        if (locksmithError) throw locksmithError;

        // Fetch leads stats
        const { data: leads, error: leadsError } = await supabase
          .from("leads")
          .select("status");
        
        if (leadsError) throw leadsError;

        // Fetch jobs stats
        const { data: jobs, error: jobsError } = await supabase
          .from("jobs")
          .select("status");
        
        if (jobsError) throw jobsError;

        // Fetch call logs stats
        const { data: calls, error: callsError } = await supabase
          .from("call_logs")
          .select("created_at");
        
        if (callsError) throw callsError;

        const today = new Date().toISOString().split('T')[0];
        const todayCalls = calls?.filter(call => 
          call.created_at?.startsWith(today)
        ).length || 0;

        setStats({
          totalLocksmiths: locksmiths?.length || 0,
          activeLocksmiths: locksmiths?.filter(l => l.active).length || 0,
          totalLeads: leads?.length || 0,
          newLeads: leads?.filter(l => l.status === 'new').length || 0,
          totalJobs: jobs?.length || 0,
          activeJobs: jobs?.filter(j => j.status === 'in_progress').length || 0,
          totalCalls: calls?.length || 0,
          todayCalls,
        });
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load dashboard statistics",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();

    // Set up real-time subscriptions for live updates
    const channels = [
      supabase.channel('locksmiths-changes').on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'locksmiths' },
        () => fetchStats()
      ),
      supabase.channel('leads-changes').on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'leads' },
        () => fetchStats()
      ),
      supabase.channel('jobs-changes').on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'jobs' },
        () => fetchStats()
      ),
      supabase.channel('calls-changes').on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'call_logs' },
        () => fetchStats()
      ),
    ];

    channels.forEach(channel => channel.subscribe());

    return () => {
      channels.forEach(channel => supabase.removeChannel(channel));
    };
  }, [toast]);

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
        <title>Dashboard - FastLockFinder Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Overview of your locksmith business operations
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Locksmiths</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalLocksmiths}</div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Badge variant="secondary" className="text-xs">
                  {stats.activeLocksmiths} active
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalLeads}</div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Badge variant={stats.newLeads > 0 ? "default" : "secondary"} className="text-xs">
                  {stats.newLeads} new
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeJobs}</div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{stats.totalJobs} total jobs</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Call Activity</CardTitle>
              <Phone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.todayCalls}</div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Today • {stats.totalCalls} total</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Quick Actions
              </CardTitle>
              <CardDescription>
                Common management tasks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid gap-2">
                <a
                  href="/admin/locksmiths"
                  className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50 transition-colors"
                >
                  <span className="font-medium">Manage Locksmiths</span>
                  <UserCheck className="h-4 w-4" />
                </a>
                <a
                  href="/admin/leads"
                  className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50 transition-colors"
                >
                  <span className="font-medium">View New Leads</span>
                  <Badge variant="outline">{stats.newLeads}</Badge>
                </a>
                <a
                  href="/admin/jobs"
                  className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50 transition-colors"
                >
                  <span className="font-medium">Active Jobs</span>
                  <Badge variant="outline">{stats.activeJobs}</Badge>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                System Status
              </CardTitle>
              <CardDescription>
                Current system information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Database Connection</span>
                <Badge variant="default" className="bg-green-500">Online</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Real-time Updates</span>
                <Badge variant="default" className="bg-green-500">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Last Backup</span>
                <Badge variant="secondary">2 hours ago</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useProfile } from "@/hooks/useProfile";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CompletionModal from "@/components/technician/CompletionModal";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Job {
  id: string;
  client_name: string | null;
  job_type: string | null;
  status: string;
  final_price: number | null;
  their_cut: number | null;
  created_at: string;
  leads: { name: string | null; phone: string | null; service_type: string | null; zip: string | null } | null;
  locksmiths: { default_cut_percent: number | null } | null;
}

const STATUS_COLORS: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  assigned:    'secondary',
  en_route:    'default',
  arrived:     'default',
  in_progress: 'secondary',
  complete:    'outline',
  completed:   'outline',
};

const NEXT_ACTION: Record<string, { label: string; next: string; requiresPrice?: boolean }> = {
  assigned:    { label: 'En Route',    next: 'en_route' },
  in_progress: { label: 'En Route',    next: 'en_route' },
  en_route:    { label: 'Arrived',     next: 'arrived' },
  arrived:     { label: 'Complete Job', next: 'complete', requiresPrice: true },
};

export default function MyJobs() {
  const { profile } = useProfile();
  const { toast } = useToast();
  const [jobs,         setJobs]        = useState<Job[]>([]);
  const [loading,      setLoading]     = useState(true);
  const [completing,   setCompleting]  = useState<string | null>(null);

  const fetchJobs = useCallback(async () => {
    if (!profile?.locksmith_id) { setLoading(false); return; }
    setLoading(true);
    const { data } = await supabase
      .from('jobs')
      .select('id, client_name, job_type, status, final_price, their_cut, created_at, leads(name,phone,service_type,zip), locksmiths(default_cut_percent)')
      .eq('locksmith_id', profile.locksmith_id)
      .not('status', 'in', '("complete","completed","missed")')
      .order('created_at', { ascending: false });
    setJobs((data as unknown as Job[]) || []);
    setLoading(false);
  }, [profile?.locksmith_id]);

  useEffect(() => { fetchJobs(); }, [fetchJobs]);

  // Realtime subscription
  useEffect(() => {
    if (!profile?.locksmith_id) return;
    const channel = supabase.channel('my-jobs')
      .on('postgres_changes', {
        event: '*', schema: 'public', table: 'jobs',
        filter: `locksmith_id=eq.${profile.locksmith_id}`,
      }, () => fetchJobs())
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [profile?.locksmith_id, fetchJobs]);

  const updateStatus = async (jobId: string, status: string) => {
    const { error } = await supabase.from('jobs').update({ status }).eq('id', jobId);
    if (error) toast({ variant: 'destructive', title: 'Error updating status' });
    else fetchJobs();
  };

  const completeJob = async (jobId: string, finalPrice: number) => {
    const { error } = await supabase
      .from('jobs')
      .update({ status: 'complete', final_price: finalPrice, completed_at: new Date().toISOString() })
      .eq('id', jobId);
    if (error) toast({ variant: 'destructive', title: 'Error completing job' });
    else { toast({ title: 'Job completed!' }); fetchJobs(); }
  };

  if (!profile?.locksmith_id) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <Briefcase className="w-10 h-10 mx-auto mb-3 opacity-40" />
        <p>Your account isn't linked to a locksmith profile yet.</p>
        <p className="text-sm mt-1">Contact your dispatcher to get set up.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-8">
      <div>
        <h1 className="text-xl font-bold">My Jobs</h1>
        <p className="text-sm text-muted-foreground">Active assignments</p>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      ) : jobs.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <Briefcase className="w-10 h-10 mx-auto mb-3 opacity-40" />
          <p>No active jobs right now.</p>
        </div>
      ) : (
        jobs.map(job => {
          const action = NEXT_ACTION[job.status];
          const techPct = job.locksmiths?.default_cut_percent ?? 40;
          return (
            <Card key={job.id} className="overflow-hidden">
              <CardContent className="pt-4 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold">{job.leads?.name || job.client_name || 'Customer'}</p>
                    <p className="text-sm text-muted-foreground">{job.leads?.service_type || job.job_type || 'Locksmith Service'}</p>
                  </div>
                  <Badge variant={STATUS_COLORS[job.status] ?? 'outline'} className="capitalize whitespace-nowrap">
                    {job.status.replace('_', ' ')}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  {job.leads?.zip && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> ZIP {job.leads.zip}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {new Date(job.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                {action && (
                  <Button
                    className="w-full"
                    variant={action.requiresPrice ? 'default' : 'secondary'}
                    onClick={() => action.requiresPrice ? setCompleting(job.id) : updateStatus(job.id, action.next)}
                  >
                    {action.label}
                  </Button>
                )}
              </CardContent>

              <CompletionModal
                open={completing === job.id}
                jobId={job.id}
                techCutPercent={techPct}
                onConfirm={completeJob}
                onClose={() => setCompleting(null)}
              />
            </Card>
          );
        })
      )}
    </div>
  );
}

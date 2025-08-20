import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, Clock, CheckCircle, User } from "lucide-react";

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

interface MobileJobCardProps {
  job: Job;
  onStatusUpdate: (jobId: string, status: string) => void;
  getStatusBadgeVariant: (status: string) => any;
}

export function MobileJobCard({ 
  job, 
  onStatusUpdate, 
  getStatusBadgeVariant 
}: MobileJobCardProps) {
  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Header with client and status */}
          <div className="flex items-start justify-between">
            <div className="min-w-0 flex-1">
              <h3 className="font-medium text-foreground truncate">
                {job.client_name || "Unknown Client"}
              </h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                <span className="font-mono text-xs">ID: {job.id.substring(0, 8)}...</span>
              </div>
            </div>
            <Badge variant={getStatusBadgeVariant(job.status)} className="flex-shrink-0">
              {job.status === "in_progress" ? "In Progress" : job.status}
            </Badge>
          </div>

          {/* Job type */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <User className="h-3 w-3 flex-shrink-0" />
            <span className="truncate">{job.job_type || "Not specified"}</span>
          </div>

          {/* Pricing */}
          <div className="space-y-1">
            {job.final_price ? (
              <div className="flex items-center gap-1 text-sm">
                <DollarSign className="h-3 w-3" />
                <span className="font-medium">${job.final_price}</span>
              </div>
            ) : (
              <div className="text-sm text-muted-foreground">Pricing not set</div>
            )}
            {job.your_cut && job.their_cut && (
              <div className="text-xs text-muted-foreground">
                You: ${job.your_cut} • Locksmith: ${job.their_cut}
              </div>
            )}
          </div>

          {/* Dates */}
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>Created: {new Date(job.created_at).toLocaleDateString()}</span>
            </div>
            {job.completed_at && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <CheckCircle className="h-3 w-3" />
                <span>Completed: {new Date(job.completed_at).toLocaleDateString()}</span>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2 pt-2">
            <Select value={job.status} onValueChange={(value) => onStatusUpdate(job.id, value)}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="sm" className="w-full">
              Edit Pricing
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
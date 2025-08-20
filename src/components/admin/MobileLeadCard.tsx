import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MapPin, Briefcase, Eye } from "lucide-react";

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

interface MobileLeadCardProps {
  lead: Lead;
  locksmiths: Locksmith[];
  onStatusUpdate: (leadId: string, status: "new" | "missed" | "in_progress" | "complete") => void;
  onAssignLocksmith: (leadId: string, locksmithId: string) => void;
  getStatusBadgeVariant: (status: string) => any;
}

export function MobileLeadCard({ 
  lead, 
  locksmiths, 
  onStatusUpdate, 
  onAssignLocksmith, 
  getStatusBadgeVariant 
}: MobileLeadCardProps) {
  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Header with name and status */}
          <div className="flex items-start justify-between">
            <div className="min-w-0 flex-1">
              <h3 className="font-medium text-foreground truncate">
                {lead.name || "Unknown"}
              </h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                <Phone className="h-3 w-3 flex-shrink-0" />
                <span className="truncate">{lead.phone}</span>
              </div>
            </div>
            <Badge variant={getStatusBadgeVariant(lead.status)} className="flex-shrink-0">
              {lead.status}
            </Badge>
          </div>

          {/* Service and location */}
          <div className="grid grid-cols-1 gap-2 text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Briefcase className="h-3 w-3 flex-shrink-0" />
              <span className="truncate">{lead.service_type || "Not specified"}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-3 w-3 flex-shrink-0" />
              <span>{lead.zip || "No location"}</span>
            </div>
          </div>

          {/* Date */}
          <div className="text-xs text-muted-foreground">
            Created: {new Date(lead.created_at).toLocaleDateString()}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2 pt-2">
            <Select 
              value={lead.status} 
              onValueChange={(value) => onStatusUpdate(lead.id, value as "new" | "missed" | "in_progress" | "complete")}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="assigned">Assigned</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex gap-2">
              <Select onValueChange={(value) => onAssignLocksmith(lead.id, value)}>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Assign locksmith" />
                </SelectTrigger>
                <SelectContent>
                  {locksmiths.map((locksmith) => (
                    <SelectItem key={locksmith.id} value={locksmith.id}>
                      {locksmith.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" className="flex-shrink-0">
                <Eye className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
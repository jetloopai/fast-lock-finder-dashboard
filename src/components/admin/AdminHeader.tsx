import { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User2, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import type { Profile } from "@/types/profiles";

interface AdminHeaderProps {
  user: User;
  profile: Profile | null;
}

const roleBadgeVariant: Record<string, "default" | "secondary" | "outline"> = {
  owner:      'default',
  dispatcher: 'secondary',
  technician: 'outline',
};

export function AdminHeader({ user, profile }: AdminHeaderProps) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({ title: "Signed out successfully" });
      navigate("/auth");
    } catch {
      toast({ variant: "destructive", title: "Error signing out" });
    }
  };

  const displayName = profile?.name || user.user_metadata?.name || user.email?.split('@')[0] || 'Admin';
  const initials    = displayName.substring(0, 2).toUpperCase();
  const role        = profile?.role ?? 'dispatcher';

  return (
    <header className="h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className={`flex h-16 items-center justify-between ${isMobile ? 'px-4' : 'px-6'}`}>
        <div className="flex items-center gap-4 min-w-0">
          <SidebarTrigger />
          {!isMobile && (
            <div className="min-w-0">
              <h1 className="text-lg font-semibold text-foreground">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Fast Lock Finder</p>
            </div>
          )}
          {isMobile && <h1 className="text-lg font-semibold text-foreground truncate">Dashboard</h1>}
        </div>

        <div className="flex items-center gap-3">
          {!isMobile && (
            <Badge variant={roleBadgeVariant[role]} className="capitalize">{role}</Badge>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.user_metadata?.avatar_url} />
                  <AvatarFallback className="bg-accent text-accent-foreground">{initials}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{displayName}</p>
                  <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  <Badge variant={roleBadgeVariant[role]} className="capitalize w-fit text-xs mt-1">{role}</Badge>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/admin/settings")}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

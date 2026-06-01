import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Users, UserCheck, Phone, Briefcase,
  Code, Settings, Lock, Palette, BarChart3, ShieldCheck,
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import type { UserRole } from "@/types/profiles";

const sharedNavItems = [
  { title: "Dashboard",      url: "/admin",                icon: LayoutDashboard },
  { title: "Locksmiths",     url: "/admin/locksmiths",     icon: UserCheck },
  { title: "Leads",          url: "/admin/leads",          icon: Users },
  { title: "Dispatch Codes", url: "/admin/dispatch-codes", icon: Code },
  { title: "Jobs",           url: "/admin/jobs",           icon: Briefcase },
  { title: "Call Logs",      url: "/admin/call-logs",      icon: Phone },
  { title: "Studio",         url: "/admin/studio",         icon: Palette },
];

const ownerOnlyNavItems = [
  { title: "Reports", url: "/admin/reports", icon: BarChart3 },
  { title: "Users",   url: "/admin/users",   icon: ShieldCheck },
];

interface AdminSidebarProps {
  role: UserRole;
}

export function AdminSidebar({ role }: AdminSidebarProps) {
  const { state } = useSidebar();
  const location  = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";
  const isMobile  = useIsMobile();

  const navItems = role === 'owner'
    ? [...sharedNavItems, ...ownerOnlyNavItems]
    : sharedNavItems;

  const isActive = (path: string) =>
    path === "/admin" ? currentPath === "/admin" : currentPath.startsWith(path);

  const getNavCls = (active: boolean) =>
    active ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : "hover:bg-sidebar-accent/50";

  const roleLabel = role === 'owner' ? 'Owner Dashboard' : 'Dispatcher Dashboard';

  return (
    <Sidebar className={isMobile ? "w-64" : collapsed ? "w-14" : "w-64"} collapsible={isMobile ? "offcanvas" : "icon"}>
      <SidebarContent>
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Lock className="w-4 h-4 text-accent-foreground" />
            </div>
            {(!collapsed || isMobile) && (
              <div>
                <h2 className="font-bold text-sidebar-foreground">FastLockFinder</h2>
                <p className="text-xs text-sidebar-foreground/70">{roleLabel}</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end={item.url === "/admin"} className={getNavCls(isActive(item.url))}>
                      <item.icon className="w-4 h-4" />
                      {(!collapsed || isMobile) && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/admin/settings" className={getNavCls(isActive("/admin/settings"))}>
                    <Settings className="w-4 h-4" />
                    {(!collapsed || isMobile) && <span>Settings</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

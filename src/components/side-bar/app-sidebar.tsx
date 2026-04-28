import { Link, useLocation } from "react-router";
import { navigationConfig } from "@/lib/nav";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { IconLogout, IconActivity } from "@tabler/icons-react";

interface AppSidebarProps {
  userRole: string;
}

export function AppSidebar({ userRole }: AppSidebarProps) {
  const location = useLocation();

  // Filter the array based on user permissions
  const filteredNav = navigationConfig.filter((item) =>
    item.roles.includes(userRole)
  );

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50">
      <SidebarHeader className="h-16 flex items-center px-4 border-b border-border/40">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-1.5 rounded-lg text-primary-foreground">
            <IconActivity size={20} stroke={2} />
          </div>
          <span className="font-heading font-bold text-lg tracking-tight group-data-[collapsible=icon]:hidden">
            STRAVIAM <span className="text-primary">HMS</span>
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.href}
                    className="hover:bg-primary/5 active:bg-primary/10 transition-colors"
                  >
                    <Link to={item.href} className="flex items-center gap-3">
                      <item.icon
                        size={20}
                        stroke={1.5}
                        className={location.pathname === item.href ? "text-primary" : "text-muted-foreground"}
                      />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border/40">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-destructive hover:bg-destructive/10 hover:text-destructive transition-all">
              <IconLogout size={20} stroke={1.5} />
              <span className="font-medium">Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

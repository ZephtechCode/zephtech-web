import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar side="right">
      <SidebarHeader />
      <SidebarContent></SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

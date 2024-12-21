import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar side="right" variant="sidebar" collapsible="offcanvas">
      <SidebarHeader />
      <SidebarContent>
        Ah.. This is awkward. This sections not quite finished yet. If you need help, our phone numbers are at the bottom of the page.
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

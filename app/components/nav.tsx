import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { SubNav } from "./sub-nav";

export default function Nav() {
  const { toggleSidebar } = useSidebar();
  const isMobile = useIsMobile()

  const handleButtonClick = () => {
    if (isMobile) {
      window.location.href = "https://example.com"; // Replace with your URL
    } else {
      toggleSidebar();
    }
  };

  return (
    <div>
    <NavigationMenu className="min-w-full [&>*]:w-full bg-sidebar px-4 py-2">
      <NavigationMenuList className="flex justify-between ">
        <NavigationMenuItem>
         <a href="/"> <img src="/images/logo.png" className=" w-44" /></a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button
            onClick={handleButtonClick}
            variant="secondary"
            className="text-white"
          >
            Client Access
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <SubNav />
    </div>
  );
}

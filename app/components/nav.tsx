"use client";

import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

export default function Nav() {
  const { toggleSidebar } = useSidebar();
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };
    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleButtonClick = () => {
    if (isMobile) {
      // Redirect to another webpage
      window.location.href = "https://example.com"; // Replace with your URL
    } else {
      // Toggle the sidebar
      toggleSidebar();
    }
  };

  return (
    <NavigationMenu className="min-w-full [&>*]:w-full bg-neutral-950">
      <NavigationMenuList className="flex w-full justify-between py-3 px-6">
        <NavigationMenuItem>
          <img src="/images/logo.png" className=" w-44" />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button
            onClick={handleButtonClick}
            variant="secondary"
            className="text-white px-6 m-0 h-8 rounded-md "
          >
            Client Access
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

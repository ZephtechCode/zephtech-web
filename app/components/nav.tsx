"use client";

import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Nav() {
  const { toggleSidebar } = useSidebar();
  const isMobile = useIsMobile()

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
    <NavigationMenu className="min-w-full [&>*]:w-full bg-sidebar max-h-16">
      <NavigationMenuList className="flex justify-between py-3 px-6">
        <NavigationMenuItem>
         <a href="/"> <img src="/images/logo.png" className=" w-44" /></a>
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

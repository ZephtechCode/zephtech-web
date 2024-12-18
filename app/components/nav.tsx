"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

export default function Nav() {
  const { toggleSidebar } = useSidebar();
  return (
    <NavigationMenu className="min-w-full bg-zinc-800 [&>*]:w-full">
      <NavigationMenuList className="flex w-full justify-between py-3 px-6">
        <NavigationMenuItem>
          <img src="/images/logo.png" className=" w-44" />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button onClick={toggleSidebar} className="bg-pink-600 text-white px-6 m-0 h-8 rounded-md hover:bg-pink-700">
            Client Access
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

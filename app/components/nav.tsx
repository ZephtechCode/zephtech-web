"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="w-screen flex justify-between py-3 px-6">
        <NavigationMenuItem>
          <img src="/images/logo.png" className=" w-44" />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button className="bg-pink-600 text-white px-6 m-0 h-8 rounded-md hover:bg-pink-700">
            client
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

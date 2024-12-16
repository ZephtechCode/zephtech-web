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
    <NavigationMenu className="">
      <NavigationMenuList className="w-screen flex content-between">
        <NavigationMenuItem>
          <span className="text-green-500 font-bold text-lg tracking-wide">
            ZEPHTECH
          </span>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700">
            Client Portal
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

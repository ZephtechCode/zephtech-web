import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <NavigationMenu className="min-w-full text-white [&>*]:w-full bg-sidebar max-h-16">
      <NavigationMenuList className="flex  justify-between py-1 px-6">
        <NavigationMenuItem>
        © 2024 Zephtech LLC
        </NavigationMenuItem>
        <NavigationMenuItem>
        <Button variant="link"><a href="tel:+17753234100">+1 (775) 323-4100</a></Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

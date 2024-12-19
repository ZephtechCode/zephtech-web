import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <NavigationMenu className="min-w-full text-white [&>*]:w-full bg-neutral-950">
      <NavigationMenuList className="flex w-full justify-between py-1 px-6">
        <NavigationMenuItem>
        © 2024 Zephtech LLC
        </NavigationMenuItem>
        <NavigationMenuItem>
        <Button variant="link">(775) 323-4100</Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

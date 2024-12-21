"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const services = [
  {
    title: "IT & Networking",
    href: "/services/networking",
    description:
      "Comprehensive IT solutions, including network setup, optimization, and device management.",
  },
  {
    title: "Development Services",
    href: "/services/web-mobile-development",
    description:
      "Custom development for web, mobile, and self-hosted solutions.",
  },
  {
    title: "3D Printing",
    href: "/services/3d-printing",
    description:
      "High-quality 3D printing solutions for prototyping and production.",
  },
  {
    title: "Shop",
    href: "https://www.ebay.com/usr/zephtech",
    description:
      "Visit our eBay store for tech products and accessories.",
  },
];

export function SubNav() {
  return (
    <NavigationMenu className="px-2 bg-transparent text-white">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/services"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Zeph Software Suite
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Explore our software options for your business needs.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {services.map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  href={service.href}
                >
                  {service.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/resources/documentation" title="Documentation">
                Guides and manuals to help you leverage our services effectively.
              </ListItem>
              <ListItem href="/resources/tutorials" title="Tutorials">
                Step-by-step tutorials for setting up and using IT solutions.
              </ListItem>
              <ListItem href="/resources/blog" title="Blog">
                Insights, updates, and tips from our IT experts.
              </ListItem>
              <ListItem href="/resources/support" title="Support">
                Dedicated support resources to resolve your technical issues.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/legal">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Terms of Service
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

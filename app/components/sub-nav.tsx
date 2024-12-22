"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const services = [
  {
    title: "IT & Networking",
    href: "/services/it",
    description:
      "Comprehensive IT solutions, including network setup, optimization, and device management.",
  },
  {
    title: "Development Services",
    href: "/services/dev",
    description:
      "Custom development for web, mobile, and self-hosted solutions.",
  },
  {
    title: "3D Printing",
    href: "/services/3d-printing",
    description:
      "High-quality 3D printing solutions for prototyping and production.",
  },
];

export function SubNav() {
  return (
    <div className="w-full max-w-full bg-neutral-950">
    <NavigationMenu className="mx-2 bg-transparent text-white max-h-14">
      <NavigationMenuList className="w-full ">
        <NavigationMenuItem >
          <NavigationMenuTrigger >Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3 border-green-700 border rounded-lg">
                <NavigationMenuLink asChild>
                  <a
                    className="flex w-full h-1/2 flex-col p-5 hover:bg-green-800 bg-green-950"
                    href="/services/software"
                  >
                    <div className=" text-lg font-medium">
                      Software Suite
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Explore our software options for your business needs.
                    </p>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    className="flex w-full h-1/2 flex-col p-5 hover:bg-green-800 bg-green-900"
                    href="https://www.ebay.com/usr/zephtech_llc"
                  >
                    <div className="text-lg font-medium">Shop</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Visit our eBay store for tech products and accessories.
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
          <NavigationMenuTrigger >Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
              <ListItem href="/blog/docs" title="Docs">
                Guides and manuals to help you leverage our services
                effectively.
              </ListItem>
              <ListItem href="/blog/tutorials" title="Tutorials">
                Step-by-step tutorials for setting up and using IT solutions.
              </ListItem>
              <ListItem href="/blog" title="Blog">
                Insights, updates, and tips from our IT experts.
              </ListItem>
              <ListItem href="/blog/support" title="Support">
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
    </div>
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

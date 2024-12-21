"use client";
import React from "react";

// shadcn/ui imports (adjust as needed for your setup):
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Tier {
  name: string;
  price: string;
  features: Record<string, boolean>;
}

interface PricingData {
  tiers: Tier[];
  features: string[];
}

const pricingData: PricingData = {
  tiers: [
    {
      name: "Basic",
      price: "$49 / month",
      features: {
        "Dedicated Support": false,
        "Unlimited Projects": false,
        "Team Collaboration": false,
        "25GB Cloud Storage": true,
        "Daily Backups": false,
      },
    },
    {
      name: "Standard",
      price: "$99 / month",
      features: {
        "Dedicated Support": true,
        "Unlimited Projects": true,
        "Team Collaboration": true,
        "25GB Cloud Storage": true,
        "Daily Backups": false,
      },
    },
    {
      name: "Premium",
      price: "$199 / month",
      features: {
        "Dedicated Support": true,
        "Unlimited Projects": true,
        "Team Collaboration": true,
        "25GB Cloud Storage": true,
        "Daily Backups": true,
      },
    },
  ],
  features: [
    "Dedicated Support",
    "Unlimited Projects",
    "Team Collaboration",
    "25GB Cloud Storage",
    "Daily Backups",
  ],
};

export default function ServiceOptions() {
  return (

      <Table className="bg-sidebar aspect-video text-white w-3/4">
        <TableHeader>
          <TableRow>
            <TableHead>Feature</TableHead>
            {pricingData.tiers.map((tier) => (
              <TableHead key={tier.name}>
                <div className="flex flex-col gap-1 items-center">
                  <span className="font-semibold">{tier.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {tier.price}
                  </span>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {pricingData.features.map((feature) => (
            <TableRow key={feature}>
              <TableCell  >{feature}</TableCell>
              {pricingData.tiers.map((tier) => (
                <TableCell className="p-10" key={tier.name} >
                  {tier.features[feature] ? (
                    <Badge variant="default">Included</Badge>
                  ) : (
                    <Badge variant="destructive">Not Included</Badge>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

  );
}

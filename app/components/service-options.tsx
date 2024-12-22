"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
    <div className="mx-auto p-4 w-4/5 text-white">
      <h2 className="text-2xl font-bold text-center mb-6">Pricing</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {pricingData.tiers.map((tier) => (
          <Card key={tier.name} className="bg-sidebar">
            <CardHeader className="text-center">
              <CardTitle>{tier.name}</CardTitle>
              <p className="text-muted-foreground">{tier.price}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {pricingData.features.map((feature) => (
                  <li key={feature} className="flex justify-between items-center">
                    <span>{feature}</span>
                    {tier.features[feature] ? (
                      <Badge variant="default">Included</Badge>
                    ) : (
                      <Badge variant="destructive">Not Included</Badge>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

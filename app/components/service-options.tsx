import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Info } from "lucide-react";

const pricingData = [
  {
    title: "Basic Plan",
    duration: "3 Months",
    blockHours: "25 hours",
    hourlyRateUnder: "$150.00",
    hourlyRateOver: "$125.00",
    maxAdditionalHours: "15 hours",
    overtimeRate: "$75.00 per hour",
    perks: ["Ideal for small businesses", "Flexible hours", "Cost-effective for basic needs"],
  },
  {
    title: "Professional Plan",
    duration: "6 Months",
    blockHours: "25 hours",
    hourlyRateUnder: "$135.00",
    hourlyRateOver: "$115.00",
    maxAdditionalHours: "15 hours",
    overtimeRate: "$67.50 per hour",
    perks: ["Great for growing teams", "Includes advanced IT support", "Discounted hourly rates"],
  },
  {
    title: "Enterprise Plan",
    duration: "12 Months",
    blockHours: "25 hours",
    hourlyRateUnder: "$120.00",
    hourlyRateOver: "$100.00",
    maxAdditionalHours: "20 hours",
    overtimeRate: "$60.00 per hour",
    perks: ["Perfect for large organizations", "Comprehensive IT services", "Lowest hourly rates"],
  },
];

const addOns = [
  {
    label: "Priority Response",
    value: "$250.00 (Same Day)",
    tooltip: "Get same-day response for critical IT issues during business hours. Perfect for urgent situations that require immediate attention."
  },
  {
    label: "Premium Response",
    value: "$500.00 (24/7 Support)",
    tooltip: "24/7 access to our IT experts without overtime charges. Ideal for businesses needing constant uptime and support."
  },
];

export default function ServiceOptions() {
  return (
    <div className="mx-auto px-4 py-6 w-full xl:w-4/5 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Flexible IT Service Plans</h2>
      <p className="text-center mb-8 text-gray-400">
        Save money and gain access to a dedicated team of IT professionals tailored to your business needs. Compare plans below to find the perfect fit for your organization.
      </p>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {pricingData.map((plan, index) => (
          <Card key={index} className="bg-sidebar shadow-md rounded-lg border border-neutral-700 p-4">
            <CardHeader className="text-center mb-4">
              <CardTitle className="text-xl font-bold text-white mb-2">{plan.title}</CardTitle>
              <p className="text-sm text-gray-400">{plan.duration}</p>
              <Separator className="my-4 border-neutral-600" />
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex justify-between">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="font-semibold cursor-pointer">Monthly Credit Hours Included:</span>
                      </TooltipTrigger>
                      <TooltipContent >Hours included in the plan</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <span>{plan.blockHours}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">Hourly Rate (&lt;25):</span>
                  <span>{plan.hourlyRateUnder}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">Hourly Rate (&gt;25):</span>
                  <span>{plan.hourlyRateOver}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">Max Additional Hours:</span>
                  <span>{plan.maxAdditionalHours}</span>
                </li>
                <li className="flex justify-between">
                  <HoverCard>
                    <HoverCardTrigger>
                      <span className="font-semibold cursor-pointer">Overtime Rate:</span>
                    </HoverCardTrigger>
                    <HoverCardContent >
                      Additional fee for hours outside of Zephtech operating hours
                    </HoverCardContent>
                  </HoverCard>
                  <span>{plan.overtimeRate}</span>
                </li>
              </ul>
              <h4 className="mt-4 font-bold text-lg text-white">Perks</h4>
              <ul className="list-disc pl-5 text-sm text-gray-400">
                {plan.perks.map((perk, i) => (
                  <li key={i}>{perk}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center mt-4">
              <Button
                variant={index === 2 ? "default" : "outline"}
                className={
                  index === 2
                    ? "bg-green-500 text-black hover:bg-green-600"
                    : "text-green-400 border-green-400 hover:bg-green-400 hover:text-black"
                }
              >
                Choose {plan.title}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <h3 className="text-2xl font-bold text-center mt-8 mb-4">Add-Ons</h3>
      <div className="flex flex-col xl:flex-row xl:justify-center gap-4">
        {addOns.map((addOn, index) => (
          <div key={index} className="bg-sidebar text-white p-4 rounded-md shadow-lg border border-neutral-700 text-center w-full xl:w-1/3">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-xl">{addOn.label}</h4>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-5 h-5" />
                  </TooltipTrigger>
                  <TooltipContent>{addOn.tooltip}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="text-lg text-gray-400 mt-2">{addOn.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

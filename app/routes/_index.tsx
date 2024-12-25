import type { MetaFunction } from "@remix-run/node";


import Hero from "~/components/hero";

import ServiceScroll from "~/components/service-scroll";

export const meta: MetaFunction = () => {
  return [
    { title: "Zephtech" },
    { name: "description", content: "Welcome to Zephtech!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col bg-neutral-950">
      <div className="flex-grow">
        
        <Hero />
        <ServiceScroll />
      </div>
    </div>
  );
}

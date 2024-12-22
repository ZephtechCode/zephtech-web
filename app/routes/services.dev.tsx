import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Zephtech | Development" },
    { name: "description", content: "Zephtech LLC Software Solutions" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col bg-neutral-950">
      <div className="flex-grow">
        
      </div>
    </div>
  );
}

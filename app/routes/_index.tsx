import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Zephtech" },
    { name: "description", content: "Welcome to Zephtech!" },
  ];
};

export default function Index() {
  return <div className="flex h-screen items-center justify-center"></div>;
}

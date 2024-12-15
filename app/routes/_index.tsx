import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/footer";
import Hero from "~/components/hero";
import Nav from "~/components/nav";
import ServiceScroll from "~/components/service-scroll";

export const meta: MetaFunction = () => {
  return [
    { title: "Zephtech" },
    { name: "description", content: "Welcome to Zephtech!" },
  ];
};

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 font-sans">
      <Nav />
      <div className="flex-grow">
        <Hero />
        <ServiceScroll />
      </div>
      <Footer />
    </div>
  );
}

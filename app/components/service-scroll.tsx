import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const cards = [
  {
    title: "IT Support",
    description:
      "Elevate your business efficiency with our comprehensive IT services. From system management to cybersecurity, we provide end-to-end solutions tailored to your unique needs, ensuring your technology drives your success.",
  },
  {
    title: "Telecom Solutions",
    description:
      "Transform your communication with our VOIP services. Enjoy crystal-clear voice calls, video conferencing, and more, all while reducing costs. Our scalable solutions fit businesses of any size, ensuring seamless connectivity.",
  },
  {
    title: "Website Development",
    description:
      "Capture your audience's attention with our custom web design services. From stunning visuals to user-friendly interfaces, we create websites that not only look great but also drive engagement and conversions.",
  },
  {
    title: "Cloud Management",
    description:
      "Maximize your cloud potential with our cloud service management solutions. We offer secure, scalable, and efficient cloud management to streamline your operations, ensuring your resources are optimized and your data is protected.",
  },
  {
    title: "IoT Integrations",
    description:
      "Unlock new possibilities with our IoT solutions. Connect devices and gather valuable data to improve operations, enhance customer experiences, and innovate your offerings.",
  },
  {
    title: "Networking Solutions",
    description:
      "Build a robust foundation for your IT infrastructure with our network management services. From setup to maintenance, we ensure a reliable, secure, and high-performance network that supports your business's growth and connectivity needs.",
  },
  {
    title: "IT Help Desk",
    description:
      "Experience unparalleled support with our help desk services. Our team of experts provides quick and efficient solutions to your IT issues, minimizing downtime and keeping your operations running smoothly.",
  },
  {
    title: "CCTV & IP Cameras",
    description:
      "Enhance your security with our advanced CCTV and IP camera solutions. We specialize in the professional installation of high-definition surveillance systems, ensuring comprehensive coverage for your premises.",
  },
];

export default function ServiceScroll() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="p-4"
    >
      <CarouselContent >
        {cards.map((card, index) => (
          <CarouselItem
            key={index}
            className="2xl:basis-1/5 xl:basis-1/4 lg:basis-1/4 md:basis-1/3 sm:basis-1/2 basis-full"
          >
            <Card className="h-48 bg-sidebar">
              <CardContent className="p-6">
                <h2 className="text-lg font-bold mb-2">{card.title}</h2>
                <p className="text-sm text-gray-500 line-clamp-5">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

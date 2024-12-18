
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const cards = [
  {
    title: "IT Solutions & Support",
    description:
      "Elevate your business efficiency with our comprehensive IT services. From system management to cybersecurity, we provide end-to-end solutions tailored to your unique needs, ensuring your technology drives your success.",
  },
  {
    title: "Telecom Solutions",
    description:
      "Transform your communication with our VOIP services. Enjoy crystal-clear voice calls, video conferencing, and more, all while reducing costs. Our scalable solutions fit businesses of any size, ensuring seamless connectivity.",
  },
  {
    title: "Website Design & Development",
    description:
      "Capture your audience's attention with our custom web design services. From stunning visuals to user-friendly interfaces, we create websites that not only look great but also drive engagement and conversions.",
  },
  {
    title: "Cloud Management & Optimization",
    description:
      "Maximize your cloud potential with our cloud service management solutions. We offer secure, scalable, and efficient cloud management to streamline your operations, ensuring your resources are optimized and your data is protected.",
  },
  {
    title: "Innovative IoT Integrations",
    description:
      "Unlock new possibilities with our IoT solutions. Connect devices and gather valuable data to improve operations, enhance customer experiences, and innovate your offerings.",
  },
  {
    title: "Comprehensive Networking Solutions",
    description:
      "Build a robust foundation for your IT infrastructure with our network management services. From setup to maintenance, we ensure a reliable, secure, and high-performance network that supports your business's growth and connectivity needs.",
  },
  {
    title: "Expert IT Help Desk Support",
    description:
      "Experience unparalleled support with our help desk services. Our team of experts provides quick and efficient solutions to your IT issues, minimizing downtime and keeping your operations running smoothly.",
  },
  {
    title: "Professional CCTV & IP Camera Installations",
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
      className="w-4/6 mx-auto p-8"
    >
      <CarouselContent className="">
        {cards.map((card, index) => (
          <CarouselItem
            key={index}
            className="basis-1/3"
          >
            <Card className="h-48">
              <CardContent className="flex flex-col items-start justify-start p-6 overflow-hidden">
                <h3 className="text-lg font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-4 break-words">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" bg-green-600 hover:bg-green-700 text-white rounded-full" />
      <CarouselNext className=" bg-green-600 hover:bg-green-700 text-white rounded-full" />
    </Carousel>
  );
}

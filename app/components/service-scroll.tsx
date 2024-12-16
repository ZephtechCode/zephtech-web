import React, { useState, useEffect } from "react";
import "../css/service-scroll.css";

export default function ServiceScroll() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const cardsToShow = 3;

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

  const handleResize = () => {
    const newWidth = window.innerWidth;
    setWindowWidth(newWidth);
    setIsMobile(newWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setCurrentIndex(0); // Reset to the first card on mobile
    } else {
      setCurrentIndex(0); // Reset to the first card when resizing to desktop
    }
  }, [isMobile]);

  const nextCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex + cardsToShow) % cards.length);
  };

  const prevCards = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - cardsToShow + cards.length) % cards.length
    );
  };

  // Get the cards to show based on the current index
  const visibleCards = isMobile
    ? cards // On mobile, show all cards
    : cards.slice(currentIndex, currentIndex + cardsToShow); // Show a subset for desktop

  return (
    <>
      <div className="container relative mx-auto px-6 py-8">
        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
          id="serviceCards"
        >
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className="service-card flex flex-col justify-between rounded bg-gray-800 p-6 text-white fade-in"
              style={{ display: "flex" }}
            >
              <div>
                <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
                <p className="mb-4 line-clamp-4 text-base text-gray-400">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {!isMobile && (
          <div className="absolute inset-0 flex items-center justify-between px-1">
            <button
              onClick={prevCards}
              className="carousel-buttons flex h-10 w-10 items-center justify-center rounded-full bg-green-600 p-3 text-white shadow-lg transition duration-300 ease-in-out hover:bg-green-700"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={nextCards}
              className="carousel-buttons flex h-10 w-10 items-center justify-center rounded-full bg-green-600 p-3 text-white shadow-lg transition duration-300 ease-in-out hover:bg-green-700"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

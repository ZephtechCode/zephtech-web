import { useEffect } from "react";
import "../css/hero.css";
import { Button } from "@/components/ui/button";

export default function hero() {
  useEffect(() => {
    const services = [
      "IT solutions?",
      "VOIP?",
      "web design?",
      "cloud?",
      "IOT?",
      "networking?",
      "help desk?",
      "CCTV?",
    ];
    let currentServiceIndex = 0;
    const dynamicTextElement = document.querySelector(".dynamic-text");
    const promptText = "So you need ";
    let isDeleting = false;
    let charIndex = 0;

    function animateTyping() {
      const currentServiceName = services[currentServiceIndex];
      const textForDisplay = isDeleting
        ? currentServiceName.slice(0, charIndex--)
        : currentServiceName.slice(0, charIndex++);
      dynamicTextElement!.textContent = promptText + textForDisplay;

      if (!isDeleting && charIndex === currentServiceName.length) {
        setTimeout(() => (isDeleting = true), 1000); // Start deleting after a pause
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentServiceIndex = (currentServiceIndex + 1) % services.length; // Cycle through services
      }

      const typingDelay = isDeleting ? 50 : 150; // Adjust speed for deletion/typing
      setTimeout(animateTyping, typingDelay);
    }

    animateTyping();

    const overlay = document.getElementById("overlay");
    let autoRevealAnimationFrame;
    const heroBackground = document.getElementById("hero-background");
    let xPosition = heroBackground!.offsetWidth / 2; // Start from the center
    let targetXPosition = xPosition;
    let moveSpeed = 2; // Adjust move speed as needed

    // Function to update position smoothly using lerp
    function lerp(start: any, end: any, amt: any) {
      return (1 - amt) * start + amt * end;
    }

    // Function for the automatic reveal effect
    function autoReveal() {
      const radius = 500; // Radius of the revealed circle
      const width = heroBackground!.offsetWidth;
      const lerpAmount = 0.05; // Adjust for smoothness

      // Reverse direction at boundaries
      if (targetXPosition <= radius || targetXPosition >= width - radius) {
        moveSpeed = -moveSpeed;
      }

      // Update target position within the boundaries
      targetXPosition += moveSpeed;
      targetXPosition = Math.max(
        radius,
        Math.min(width - radius, targetXPosition)
      );

      // Smoothly update current position towards the target
      xPosition = lerp(xPosition, targetXPosition, lerpAmount);

      // Update overlay gradient for auto movement
      const gradient = `radial-gradient(circle at ${xPosition}px 50%, transparent 0%, black ${radius}px)`;
      overlay!.style.background = gradient;

      autoRevealAnimationFrame = requestAnimationFrame(autoReveal); // Continue the animation loop
    }

    // Initialize the automatic reveal effect
    autoReveal();

    // Function to stop automatic reveal and switch to mouse control
    heroBackground!.addEventListener("mousemove", function (e) {
      cancelAnimationFrame(autoRevealAnimationFrame!); // Stop the automatic reveal
      const x = e.clientX - this.offsetLeft;
      const radius = 500;
      const gradient = `radial-gradient(circle at ${x}px 50%, transparent 0%, black ${radius}px)`;
      overlay!.style.background = gradient;
    });

    // Restart automatic reveal when mouse leaves

    heroBackground!.addEventListener("mouseleave", function () {
      overlay!.style.background = "black";
      autoReveal(); // Restart the automatic movement
    });
  }, []);

  return (
    <div className="hero-background flex flex-col" id="hero-background">
      <div className="overlay" id="overlay"></div>

      <div className="content flex-col justify-between">
        <div className="flex flex-1 flex-col justify-center p-8 text-center">
          <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="dynamic-text">So you need IT services?</span>
          </h1>
        </div>

        <div className="p-4 text-center">
          <h2 className="mb-4 text-gray-300 text-xl font-bold">
          Because every strong network starts with a good connection.
          </h2>
          <h3 className="mb-4 text-gray-300 text-md font-semibold">
          Lets amp up your business.
          </h3>
          <Button asChild className="bg-green-600 text-white transition-colors hover:bg-green-700">
            <a href="/options">Establish Link</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

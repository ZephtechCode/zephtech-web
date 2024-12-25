'use client';

import { useEffect } from "react";
import "~/css/hero.css";
import { Button } from "@/components/ui/button";

export default function Hero() {
  useEffect(() => {
    const services = [
      "IT solutions?",
      "VOIP services?",
      "web design?",
      "cloud management?",
      "IoT integration?",
      "networking solutions?",
      "a help desk?",
      "IP cameras?",
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
      if (dynamicTextElement) {
        dynamicTextElement.textContent = promptText + textForDisplay;
      }
      if (!isDeleting && charIndex === currentServiceName.length) {
        setTimeout(() => (isDeleting = true), 1500);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentServiceIndex = (currentServiceIndex + 1) % services.length;
      }
      const typingSpeed = isDeleting ? 50 : 125;
      setTimeout(animateTyping, typingSpeed);
    }

    animateTyping();

    const overlay = document.getElementById("overlay");
    const heroBackground = document.getElementById("hero-background");

    let isAuto = true;
    let autoRevealAnimationFrame: number | undefined;

    const radius = 300;
    let width = heroBackground!.offsetWidth;
    let leftBound = -(radius / 2);
    let rightBound = width + radius / 2;

    let xPosition = width / 2;
    let yPosition = heroBackground!.offsetHeight / 2;

    let targetXPosition = xPosition;
    let targetYPosition = yPosition;

    let moveSpeed = 3;
    const lerpAmount = 0.05;

    function lerp(start: number, end: number, amt: number) {
      return (1 - amt) * start + amt * end;
    }

    function renderLoop() {
      width = heroBackground!.offsetWidth;
      leftBound = -(radius / 2);
      rightBound = width + radius / 2;

      if (isAuto) {
        if (targetXPosition <= leftBound || targetXPosition >= rightBound) {
          moveSpeed = -moveSpeed;
        }
        targetXPosition += moveSpeed;
        targetXPosition = Math.max(leftBound, Math.min(rightBound, targetXPosition));
        targetYPosition = heroBackground!.offsetHeight / 2;
      }

      xPosition = lerp(xPosition, targetXPosition, lerpAmount);
      yPosition = lerp(yPosition, targetYPosition, lerpAmount);

      if (overlay) {
        overlay.style.background = `radial-gradient(circle at ${xPosition}px ${yPosition}px, transparent 0%, rgba(0, 0, 0, 0.9) ${radius}px)`;
      }

      autoRevealAnimationFrame = requestAnimationFrame(renderLoop);
    }

    renderLoop();

    heroBackground!.addEventListener("mousemove", (e) => {
      if (autoRevealAnimationFrame) {
        // We keep the same loop running, but switch mode
        isAuto = false;
      }
      const mouseX = e.clientX - heroBackground!.offsetLeft;
      const mouseY = e.clientY - heroBackground!.offsetTop;
      targetXPosition = mouseX;
      targetYPosition = mouseY;
    });

    heroBackground!.addEventListener("mouseleave", () => {
      isAuto = true;
      const clampedX = Math.max(leftBound, Math.min(rightBound, xPosition));
      targetXPosition = clampedX;
    });
  }, []);

  return (
    <div
      id="hero-background"
      className="
        relative
        mobile:h-[44svh]
        tl-mobile:h-[55svh]
        h-[60svh]
        bg-[url('/images/hero.svg')]
        bg-no-repeat
        bg-bottom
        bg-cover
        flex
        flex-col
        overflow-hidden
      "
    >
      <div
        id="overlay"
        className="
          absolute
          inset-0
          w-full
          h-full
          bg-black
          z-[1]
        "
      />
      <div
        className="
          relative
          z-[2]
          h-full
          flex
          flex-col
          items-center
          justify-center
          bg-transparent
        "
      >
        <div className="flex flex-1 flex-col justify-center p-8 text-center">
          <h1
            className="
              text-2xl
              font-bold
              text-white
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              xl:text-6xl
            "
          >
            <span className="dynamic-text">So you need IT services?</span>
          </h1>
        </div>
        <div className="p-4 text-center">
          <h2 className="mb-4 text-gray-300 text-xl font-bold">
            Because every strong community starts with a solid connection.
          </h2>
          <h3 className="mb-4 text-gray-300 text-md font-semibold">
            Lets amp up your business.
          </h3>
          <Button
            asChild
            className="bg-green-600 text-white transition-colors hover:bg-green-700"
          >
            <a href="/options">Establish Link</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

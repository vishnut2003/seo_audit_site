'use client';

import { RiRocket2Line } from "@remixicon/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroSection = () => {

  const h1StaticTitle = "Transform Your SEO";
  const paragraph = "Unlock the power of SEO with advanced tools that provide actionable insights, detailed analytics, and smart strategies to boost rankings, increase traffic, and dominate search results."

  const typingSpeed = 150; // Speed of typing in ms
  const delayBetweenWords = 2000; // Delay before switching words

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const dynamicWords = ["Insights", "Precision", "Control", "Analytics", "Strategies"];
    const currentWord = dynamicWords[currentWordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText.length < currentWord.length) {
      // Typing effect
      timeout = setTimeout(() => {
        setDisplayedText((prev) => currentWord.substring(0, prev.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting effect
      timeout = setTimeout(() => {
        setDisplayedText((prev) => currentWord.substring(0, prev.length - 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentWord.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to the next word
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
    }

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [displayedText, isDeleting, currentWordIndex, typingSpeed, delayBetweenWords]);

  return (
    <div className="outer-wrapper h-full p-0 max-h-[100vh]">
      <div className="inner-wrapper">

        {/* Left column */}
        <div className="w-full flex flex-col gap-8 leading-9 text-lg pr-20">
          <h1 className="text-accent1 uppercase">
            {h1StaticTitle} <br /> Strategy with
            <span
              className="text-accent2"
            > {displayedText}</span>

            {/* cursor */}
            <span className="bg-accent2 w-[1px] h-8 relative inline-block ml-1 animate-ping"></span>
          </h1>

          <p className="text-foreground opacity-80">{paragraph}</p>

          <div>
            <button className="button-style-primary flex gap-3 items-center">
              Get Started
              <RiRocket2Line size={25} className="animate-bounce" />
            </button>
          </div>
        </div>

        {/* Right Col */}
        <div className="w-[70%] py-32">
          <Image
            alt="Tool Dashboard"
            src={'/home/home-hero-image.png'}
            width={1055}
            height={919}
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
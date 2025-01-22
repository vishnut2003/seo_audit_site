import HeroSection from "@/components/home/HeroSection";
import LetsTalkSection from "@/components/home/LetsTalkSection";
import Basiclayout from "@/layouts/basicLayout/layout";

export default function Home() {
  return (
    <Basiclayout>
      <HeroSection/>
      <LetsTalkSection/>
    </Basiclayout>
  );
}

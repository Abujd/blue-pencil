import HeroSection from "./components/heroSection/HeroSection";
import LightFastPowerful from "./components/lightFastPowerful/LightFastPowerful";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
   <div className="lg:mx-[120px] mx-[40px]">
     {/* <Navbar /> */}
     <HeroSection />
     <LightFastPowerful />
   </div>
  );
}

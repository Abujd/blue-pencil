import HeroSection from "./components/heroSection/HeroSection";
import LightFastPowerful from "./components/lightFastPowerful/LightFastPowerful";
import LightFastPowerfulTiles from "./components/lightFastPowerfulTiles/lightFastPowerfulTiles";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";

export default function Home() {
  return (
   <div className="lg:mx-[120px] mx-[40px]">
     {/* <Navbar /> */}
     <HeroSection />
     <LightFastPowerful />
     <LightFastPowerfulTiles />
     <Pricing />
   </div>
  );
}

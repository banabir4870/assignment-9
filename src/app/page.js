import Banner from "@/components/Banner";
import FeaturedCars from "@/components/FeaturedCars";
import HowDriveFleetWorks from "@/components/HowDriveFleetWorks";
import WhyChooseDriveFleet from "@/components/WhyChooseDriveFleet";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedCars></FeaturedCars>
      <WhyChooseDriveFleet></WhyChooseDriveFleet>
      <HowDriveFleetWorks></HowDriveFleetWorks>
    </div>
  );
}

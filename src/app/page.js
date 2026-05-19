import Banner from "@/components/Banner";
import FeaturedCars from "@/components/FeaturedCars";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedCars></FeaturedCars>
    </div>
  );
}

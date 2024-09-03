import { Navbar } from "@/components/Navbar";
import { Carousel } from "@/components/carousel";

export default function Home() {
  return (
    <div className=" text-black w-full h-fit ">
      <div className="   ">
        <Navbar />
        <Carousel />
      </div>
    </div>
  );
}

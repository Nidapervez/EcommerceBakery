import HeroSection from "./components/herosection";
import {CarouselSize} from "./components/productCarousal";

export default function Home() {
  return (
  <div className="bg-transparent min-h-screen">
    
    <HeroSection />
    <CarouselSize images={["/images/18.jpg" , "/images/17.jpg" , "/images/16.jpg" ,"/images/15.jpg", "/images/14.jpg", "/images/13.jpg"]}/>
  </div>  
  );
}

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "../components/About";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Whatsapp from "../components/Whatsapp";
// import FlowbiteScript from "../components/FlowbiteScript";
import SliderShow  from "@/components/SliderShow";



export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col justify-between p-5 fondo-color">
      <div className="">        
        <Navbar />
        {/* <Banner /> */}
        <SliderShow />
        {/* <FlowbiteScript /> */}
        <Whatsapp />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

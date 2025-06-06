import Image from "next/image";
import Navbar from "./ui components/NavBar";
import AIChatLanding from "./landingpage/page";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black">
     <Navbar />
     <AIChatLanding />
    </div>
  );
}

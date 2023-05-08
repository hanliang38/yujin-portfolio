import { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function ObjectId() {
  // Ref
  const workRef = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>Yujin's Website</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />

        <div>
          
        </div>
        <div
          className="my-20 w-full mx-auto grid place-items-center text-gray-500 hover:text-orange-600"
          onClick={() => window.scrollTo(0, 0)}
        >
          ↑ Back to Top
        </div>
        <Footer />
      </div>
    </div>
  );
}

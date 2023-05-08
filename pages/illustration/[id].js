import { useRef } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import WorkCard from "../../components/WorkCard";
import Footer from "../../components/Footer";
import Head from "next/head";
import Cursor from "../../components/Cursor";

// Local Data
import data from "../../data/portfolio.json";

export default function IllustrationId() {
  // Ref
  const workRef = useRef();
  const router = useRouter();

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
        {/* 일러 작업물 */}
        console.log()
        {router.query.id ? (
          <div className="mt-10 flex flex-col">
            <img
              className="w-full h-96 rounded-lg shadow-lg object-cover"
              src={data.illustrations.image}
              alt={data.illustrations.title}
            ></img>
            <h1
              ref={data.illustrations.title}
              className="mt-10 text-4xl mob:text-2xl laptop:text-6xl text-bold"
            >
              {data.illustrations.title}
            </h1>
            <h2
              ref={data.illustrations.description}
              className="mt-2 text-xl max-w-4xl text-darkgray opacity-50"
            >
              {data.illustrations.description}
            </h2>{" "}
          </div>
        ) : (
          <div className="mt-10 flex flex-col"></div>
        )}
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

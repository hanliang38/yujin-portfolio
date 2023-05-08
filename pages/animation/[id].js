import { useRef } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";
import Cursor from "../../components/Cursor";

// Local Data
import data from "../../data/portfolio.json";

export default function AnimationId() {
  // Ref
  const workRef = useRef();
  const router = useRouter();
  const aniNum = Number(router.query.id) - 1;
  const aniData = data.animations[aniNum];
  // console.log(aniData);

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

        {/* 애니메이션 작업물 */}

        <div
          className="grid items-center"
          onClick={() => window.open(aniData.link)}
        >
          <p className="text-gray-400 hover:-translate-y-1 hover:translate-x-1">
            ⬇ Click to view video
          </p>
          {/* 이미지 */}
          {aniData ? (
            <div className="transition ease-in-out delay-150 hover:-translate-y-1">
              <img
                alt={aniData.title}
                className="h-full w-full object-cover"
                src={aniData.imageSrc}
              ></img>
            </div>
          ) : (
            <div></div>
          )}
          <div>
            <h1 className="mt-5 text-3xl font-medium hover:text-orange-500 hover:delay-150">
              {aniData.title ? aniData.title : "Project Name"}
            </h1>
            <h2 className="text-xl opacity-50 hover:text-gray-500">
              {aniData.description ? aniData.description : "Description"}
            </h2>
          </div>
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

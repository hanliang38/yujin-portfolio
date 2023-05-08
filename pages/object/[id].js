import { useRef } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";
import Cursor from "../../components/Cursor";

// Local Data
import data from "../../data/portfolio.json";

export default function ObjectId() {
  // Ref
  const workRef = useRef();
  const router = useRouter();
  const objNum = Number(router.query.id) - 1;
  const objData = data.objects[objNum];
  // console.log(objData);

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
        <title>Yujin Website</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />

        {/* obj 작업물 */}

        <div className="grid items-center">
          {/* 이미지 */}
          {objData ? (
            <div className="">
              <img
                alt={objData?.title}
                className="h-full w-full object-cover"
                src={objData?.imageSrc}
              ></img>
            </div>
          ) : (
            <div></div>
          )}
          <div className="">
            <h1 className="mt-5 text-3xl font-medium">
              {objData?.title ? objData?.title : "Project Name"}
            </h1>
            <h2 className="text-xl opacity-50">
              {objData?.description ? objData?.description : "Description"}
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

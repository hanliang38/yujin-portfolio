import { useRef } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import WorkCard from "../../components/WorkCard";
import Footer from "../../components/Footer";
import Head from "next/head";
import Cursor from "../../components/Cursor";

// Local Data
import data from "../../data/portfolio.json";

export default function Object() {
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
      </div>
      {/* 표지배경*/}
      <div className="laptop:mt-20 mt-10"></div>
      <div className="fixed-bg-ani"></div>
      <div className="container mx-auto mb-10">
        {/* 일러작업물 */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.objects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => router.push(`/object/${project.id}`)}
              />
            ))}
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

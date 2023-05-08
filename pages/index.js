import { useRef } from "react";
import Header from "../components/Header";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const textFive = useRef();

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

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

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
        {/* 간단한 자기소개 */}
        <div className="laptop:mt-20 mt-10">
          <div className="mt-3">
            <h1
              ref={textOne}
              className="text-xl tablet:text-3xl laptop:text-3xl laptopl:text-4xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-3/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-xl tablet:text-3xl laptop:text-3xl laptopl:text-4xl p-1 tablet:p-2 text-bold w-full laptop:w-3/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-xl tablet:text-3xl laptop:text-3xl laptopl:text-4xl p-1 tablet:p-2 text-bold w-full laptop:w-3/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-xl tablet:text-3xl laptop:text-3xl laptopl:text-4xl p-1 tablet:p-2 text-bold w-full laptop:w-3/5"
            >
              {data.headerTaglineFour}
            </h1>
            <h1
              ref={textFive}
              className="text-xl tablet:text-3xl laptop:text-3xl laptopl:text-4xl p-1 tablet:p-2 text-bold w-full laptop:w-3/5"
            >
              {data.headerTaglineFive}
            </h1>
          </div>
        </div>

        {/* 전체작업물 */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.showpieces.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
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

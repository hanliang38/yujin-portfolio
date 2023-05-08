import { useRef } from "react";
import { useTheme } from "next-themes";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";
import Button from "../components/Button";

export default function ObjectId() {
  // Ref
  const workRef = useRef();
  const { theme, setTheme } = useTheme();

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

        <div className="mx-2 mt-10">
          <h1 className="text-3xl my-3">CONTACT</h1>
          <div className="p-2 flex-col">
            <div className="text-2xl my-2 py-1 ">Yujin Lee</div>
            <div
              className="flex text-lg py-1"
              onClick={() => window.open(data.socials[1].link)}
            >
              <p className="hover:text-orange-500">
                ‣ Email 1 : k2145340@kingston.ac.uk
              </p>
              <Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 hover:text-orange-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </Button>
            </div>
            <div
              className="flex text-lg py-1"
              onClick={() => window.open(data.socials[2].link)}
            >
              <p className="hover:text-orange-500">
                ‣ Email 2 : yuja0627@gmail.com
              </p>
              <Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 hover:text-orange-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </Button>
            </div>
            <div
              className="flex text-lg py-1"
              onClick={() => window.open(data.socials[0].link)}
            >
              <p className="hover:text-orange-500">‣ Instagram : @yujaol</p>
              <Button onClick={() => window.open(data.socials[0].link)}>
                <img
                  className="h-5 hover:translate-x-0.5 hover:scale-110"
                  src={`/images/${
                    theme === "dark"
                      ? "insta-icon-dark.svg"
                      : "insta-icon-white.svg"
                  }`}
                />
              </Button>
            </div>
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

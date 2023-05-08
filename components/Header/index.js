import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { showAnimation, showObject, showContact } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5 mb-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between laptop:p-0">
              <div
                onClick={() => router.push("/")}
                className="font-medium laptop:p-0 link"
              >
                {data.darkMode && (
                  <img
                    className="h-10"
                    src={`/images/${
                      theme === "dark" ? "logo-yellow.png" : "logo-black.svg"
                    }`}
                  ></img>
                )}
              </div>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              <div className="grid grid-cols-1">
                <Button
                  onClick={() => router.push("/illustration")}
                  classes="first:ml-1"
                >
                  Illustration
                </Button>
                {showAnimation && (
                  <Button
                    onClick={() => router.push("/animation")}
                    classes="first:ml-1"
                  >
                    Animation
                  </Button>
                )}
                {showObject && (
                  <Button
                    onClick={() => router.push("/object")}
                    classes="first:ml-1"
                  >
                    Object
                  </Button>
                )}
                {showContact && (
                  <Button
                    onClick={() => router.push("/contact")}
                    classes="first:ml-1"
                  >
                    Contact
                  </Button>
                )}
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-5 mb-5 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <div
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {mounted && theme && data.darkMode && (
            <Button onClick={() => router.push("/")}>
              <img
                className="h-10"
                src={`/images/${
                  theme === "dark" ? "logo-yellow.png" : "logo-black.svg"
                }`}
              ></img>
            </Button>
          )}
        </div>
        <div className="flex">
          <Button onClick={() => router.push("/illustration")}>
            Illustration
          </Button>
          {showAnimation && (
            <Button onClick={() => router.push("/animation")}>Animation</Button>
          )}
          {showObject && (
            <Button onClick={() => router.push("/object")} classes="first:ml-1">
              Object
            </Button>
          )}
          {showContact && (
            <Button onClick={() => router.push("/contact")}>Contact</Button>
          )}

          {mounted && theme && data.darkMode && (
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <img
                className="h-6"
                src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
              ></img>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

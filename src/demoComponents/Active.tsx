import React, { useEffect } from "react";

const ScrollNavigation: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const windscroll =
        window.pageYOffset || document.documentElement.scrollTop;
      const menu = document.getElementsByClassName("nav");

      if (menu.length > 0) {
        const menu_slider_click = document.getElementById("nav_slide_click");
        if (menu_slider_click) {
          nav_slider(menu[0], function (el: any, height, tempMarginTop) {
            el.onclick = function () {
              menu_slider_click.style.height = height + "px";
              menu_slider_click.style.marginTop = tempMarginTop + "px";
            };
          });
        }
      }

      function nav_slider(
        menu: any,
        callback: (el: Element, height: number, tempMarginTop: number) => void
      ) {
        const menu_height = menu.offsetHeight;
        const menuItems = menu.getElementsByTagName("li");
        if (menuItems.length) {
          const marginTop: number[] = [];
          Array.from(menuItems).forEach(function (el: any, index) {
            const height = getElementHeight(el.offsetHeight);
            let tempMarginTop = 0;
            if (index !== 0) {
              tempMarginTop = getArraySum(marginTop);
            }
            callback(el, height, tempMarginTop);
            marginTop.push(height);
          });
        }
      }

      function getElementHeight(min: number): number {
        return min;
      }

      function getArraySum(arr: number[]): number {
        let sum = 0;
        arr.forEach(function (el) {
          sum += el;
        });
        return sum;
      }

      const sections = document.querySelectorAll("section");
      sections.forEach(function (section, i) {
        if (section.offsetTop <= windscroll - 0) {
          const navItems = document.querySelectorAll("nav li");
          navItems.forEach(function (item) {
            item.classList.remove("bg-blue-300");
          });
          navItems[i].classList.add("bg-blue-300");
        }
      });

      if (windscroll < 100) {
        const navItems = document.querySelectorAll("nav li");
        navItems.forEach(function (item) {
          item.classList.remove("bg-blue-300");
        });
        navItems[0].classList.add("bg-blue-300");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="bg-gray-900 fixed top-0 left-0 w-64 h-screen">
        <div className="flex flex-row">
          <ul className="navbar-nav w-full text-center m-0 p-0">
            <li>
              <a
                href="#one"
                className="block py-4 text-white no-underline border-b-2 border-transparent"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#two"
                className="block py-4 text-white no-underline border-b-2 border-transparent"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#three"
                className="block py-4 text-white no-underline border-b-2 border-transparent"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#four"
                className="block py-4 text-white no-underline border-b-2 border-transparent"
              >
                PORTFOLIO
              </a>
            </li>
            <li>
              <a
                href="#five"
                className="block py-4 text-white no-underline border-b-2 border-blue-600  "
              >
                CONTACT
              </a>
            </li>
          </ul>
          <hr
            id="nav_slide_click"
            className="w-1/6 bg-white border-none transition duration-300 ease-in-out"
          />
        </div>
      </nav>
      <section
        id="one"
        className="min-h-screen h-96 bg-gray-700 text-white text-center py-20"
      >
        HOME
      </section>
      <section
        id="two"
        className="min-h-screen h-96 bg-gray-800 text-white text-center py-20"
      >
        ABOUT
      </section>
      <section
        id="three"
        className="min-h-screen h-96 bg-gray-900 text-white text-center py-20"
      >
        SERVICES
      </section>
      <section
        id="four"
        className="min-h-screen h-96 bg-gray-800 text-white text-center py-20"
      >
        PORTFOLIO
      </section>
      <section
        id="five"
        className="min-h-screen h-96 bg-gray-700 text-white text-center py-20"
      >
        CONTACT
      </section>
    </>
  );
};

export default ScrollNavigation;

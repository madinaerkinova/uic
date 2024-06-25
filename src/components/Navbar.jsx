import { IoMdGlobe } from "react-icons/io";
import Logo from "./Logo";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const blurRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        blurRef.current.classList.add("backdrop-blur-2xl");
      } else {
        blurRef.current.classList.remove("backdrop-blur-2xl");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={blurRef}
      className="fixed z-50 top-0 w-full bg-gray-800 shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to={"/"} className="flex items-center gap-2">
          <Logo />
        </Link>

        <div className="flex items-center gap-14">
          <ul className="flex text-[#9caaac] text-[16px] font-semibold gap-8">
            <li>
              <Link to={"/about"} className="hover:text-white duration-300">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to={"/service"} className="hover:text-white duration-300">
                SERVICES
              </Link>
            </li>
            <li>
              <Link to={"/portfolio"} className="hover:text-white duration-300">
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link to={"/career"} className="hover:text-white duration-300">
                CAREER
              </Link>
            </li>
            <li>
              <Link to={"/blog"} className="hover:text-white duration-300">
                BLOG
              </Link>
            </li>
          </ul>
          
          <div className="relative group">
            <div className="flex items-center gap-1 border border-[#9caaac] px-2 py-1 duration-300 transition-all rounded-lg">
              <IoMdGlobe className="text-[#9caaac] text-[24px]" />
              <span className="text-[#9caaac] mr-2 hidden group-hover:block duration-300 text-[18px]">
                Language:
              </span>
              <span className="flex gap-3">
                <span className="text-white font-semibold text-[18px] cursor-pointer hover:text-gray-300 transition-colors duration-300">
                  EN
                </span>
                <span className="text-[#9caaac] font-semibold text-[18px] cursor-pointer hover:text-white transition-colors duration-300">
                  RU
                </span>
                <span className="text-[#9caaac] font-semibold text-[18px] cursor-pointer hover:text-white transition-colors duration-300">
                  UZ
                </span>
              </span>
            </div>
          </div>

          <span className="text-[#9caaac] text-[24px] font-semibold cursor-pointer hover:text-white transition-colors duration-300">
            +998 71 <span className="text-white">200 70 07</span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

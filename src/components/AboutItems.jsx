import React from 'react';

const AboutItems = () => {
  return (
    <>
      <div className="mt-10 bg-[#252527] hidden rounded-[12px] p-5 lg:p-7">
        <p
          className="text-[14px] md:text-[16px] font-extralight md:font-normal leading-[144%] tracking-[0.2px] aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span className="text-[#00A795] md:text-[#fff] text-[18px] md:text-[16px]">"UIC Group"</span>{' '}
          is the address of projects that have their own values and do not pass without quality
          control. Every opportunity and demand in our company serves to meet the needs of our
          customers with maximum efficiency. Our company is ready to serve customers not just as
          customers, but as partners for life with the best offers!
        </p>
        <div className="relative">
          <div className="mt-[22px] projects-list duration-300">
            {/* Project items */}
            <div
              className="relative group project-item aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="flex flex-col items-center md:gap-5 md:flex-row py-6 md:py-0">
                <span className="min-w-[120px] flex-center">
                  <img
                    src="/uic-images/about/portfolio/about-safenetpay.svg"
                    alt="company logo"
                    className="m-auto"
                  />
                </span>
                <p className="pb-3 pt-5 md:pb-5 about_text">
                  We have developed the safenetpay.com website of the international level using
                  various types of animation that meet all cybersecurity requirements. Safenetpay is
                  an international company engaged in the optimization of payment systems for
                  companies.
                </p>
              </div>
            </div>
            {/* Add more project items following the same structure */}
          </div>
          {/* Portfolio link */}
          <div className="flex justify-center mt-4">
            <a
              href="/portfolio"
              className="flex group w-fit p-[10px] pl-[16px] items-center borders justify-center border-[1px] border-solid rounded-12 transition duration-500 ease-in-out backdrop-blur-xl cursor-pointer aos-init"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <p className="group-hover:bg-white linear-wipe lg:!leading-130 transition duration-500 ease-in-out leading-[16px] link text-base font-bold flex justify-center items-center lg:!text-base text-[13px] md:!text-base gap-x-[10px]">
                Portfolio{' '}
                <i className="icon hover:text-red-500 text-white flex items-center -rotate-90">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={16} height={16} rx={8} fill="white" fillOpacity="0.3" />
                    <path
                      d="M10.9997 6.50017L7.99986 9.49989L5 6.50012"
                      stroke="white"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutItems;

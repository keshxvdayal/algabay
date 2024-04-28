import Section from "./Section";
import Heading from "./Heading";
import "../components/CSS/hero.css";
import {
  // PhotoChatMessage,
  Gradient,
  // VideoBar,
  // VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading title="Experience AI optimized Portfolios" />
        {/* <h2 className="mb-4 md:justify-center">
          Experience AI optimized Portfolios
        </h2> */}

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-600  md:w-3/5 xl:w-auto">
              <div className="h-full w-full pt-11 pr-10">
                <iframe
                  src="https://my.spline.design/uzummarketlogo-d95cc7319658523765a71a850615b7b5/"
                  width="900px"
                  height="600px"
                  className=" mt-12 spline"
                ></iframe>
              </div>
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Dynamic Strategies</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Benefit from tailored, dynamic strategies for diverse financial
                goals. Navigate risks with continuous AI adjustments, seizing
                opportunities. Effortlessly manage your portfolio through our
                user-friendly, intuitive interface.
              </p>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;

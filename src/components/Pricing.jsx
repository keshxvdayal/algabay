import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import support from "../assets/new/partners.jpeg";
import { MouseParallax } from "react-just-parallax";
import "./CSS/hero.css";

const Pricing = ({ parallaxRef }) => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <MouseParallax
          strength={0.07}
          parallaxContainerRef={parallaxRef}
          className="sphere"
        >
          <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
            <img
              src={smallSphere}
              className="relative z-1"
              width={255}
              height={255}
              alt="Sphere"
            />

            <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <img
                src={stars}
                className="w-full"
                width={950}
                height={400}
                alt="Stars"
              />
            </div>
          </div>
        </MouseParallax>

        <Heading tag="Get started with Algabay" title="Supported By" />
        <img src={support} className="flex" />
        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;

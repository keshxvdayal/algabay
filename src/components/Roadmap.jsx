import "./CSS/header.css";
import Heading from "./Heading";
import Section from "./Section";
// import { roadmap } from "../constants";
import "../components/CSS/hero.css";
import Calculator from "../assets/new/Purple Blue Modern Pie Chart Analysis Graph.png";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading
        tag="Ready to get started"
        title="Empower your finance with AI tools"
      />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4">
        <div className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem]bg-conic-gradien">
          <p className=" mt-3 para">
            “A powerhouse for financial insights. Precision analysis, strategic
            forecasting, and efficient automation redefine your financial
            operations. Elevate decision making with new AI technology.”
          </p>
        </div>
        <Gradient />
        <img src={Calculator} className="image" />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        {/* <Button href="/roadmap">Learn More</Button> */}
        <button className="btn-5">Learn More</button>
      </div>
    </div>
  </Section>
);

export default Roadmap;

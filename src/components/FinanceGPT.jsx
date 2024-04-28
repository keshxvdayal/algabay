import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import chatBot from "../assets/new/Intercom.jpg";
import "../components/CSS/hero.css";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">Introducing our Finance GPT</h2>
          <p className="body-2 mt-3 pb-16">
            “A powerhouse for financial insights. Precision analysis, strategic
            forecasting, and efficient automation redefine your financial
            operations. Elevate decision making with new AI technology.”
          </p>
          <Button>Try it now</Button>
        </div>

        <div className="lg:ml-auto xl:w-full mt-4">
          {/* <div className="relative left-1/2 flex h-96  aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100"> */}
          <LeftCurve />
          <RightCurve />
          <img
            src={chatBot}
            width="700px"
            height="200px"
            className="image-chatbot"
          />
          {/* </div> */}
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;

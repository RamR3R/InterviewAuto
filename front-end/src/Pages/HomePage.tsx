import { Parallax } from "react-parallax";
import Footer from "../components/Footer";
import "../Styles/HomePage.css";
// import {dashvedio} from "./dashvedio.mp4";

const HomePage = () => {

  return (
    <div style={{zIndex: 100}}>
      <div className="openai-page" style={{zIndex: -1}}>
        <Parallax
          bgImage="https://mediatek-marketing.transforms.svdcdn.com/production/posts/Option-1-AI-banner.png?w=2048&h=1075&q=80&auto=format&fit=crop&dm=1684471346&s=bd802b7c4fd69954afd4a0334e6279a5"
          strength={150}
          style={{zIndex: -1}}
        >
          <div className="parallax-content">
            <h1 style={{ margin: "10px" }}>OpenAI Interview Site</h1>
            <div className="box">
              <p className="p1">
                Seamless AI-powered Interviews Gone are the days of scheduling
                and coordinating interviews with human recruiters. Our website
                offers fully automated interviews powered by OpenAI's advanced
                language model. Candidates can now take interviews at their
                convenience, and employers can assess candidates without any
                time constraints.
              </p>
            </div>
          </div>
        </Parallax>
        <Parallax
          bgImage="https://img.freepik.com/premium-photo/artificial-intelligence-metaverse-background-banner-showing-ai-technology-generative-ai_620624-6967.jpg"
          strength={300}
          style={{zIndex: -1}}
        >
          <div className="parallax-content">
            <h1 style={{ color: "white" }}>Instant Feedback</h1>
            <div className="box2">
              <div>
                <p>
                  Realistic Interaction OpenAI's language model provides a
                  remarkably realistic interview experience. Candidates will
                  feel like they are interacting with an actual human
                  interviewer, allowing them to showcase their skills and
                  personality authentically. Instant Evaluation and Insights No
                  more lengthy wait times for interview results!
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </Parallax>
        <Parallax
          bgImage="https://t4.ftcdn.net/jpg/05/88/10/29/360_F_588102949_M0FLcW9XrDp2siJ8NC3GLLRo2NL46TZU.jpg"
          strength={100}
          style={{zIndex: -1}}
        >
          <div className="parallax-content">
            <div className="box3">
              <p style={{ fontWeight: "600" }}>
                Tell me about your qualifications
              </p>
            </div>
          </div>
        </Parallax>
        <Parallax bgImage="https://www.europarl.europa.eu/resources/library/images/20230607PHT95601/20230607PHT95601_original.jpg"
          strength={300}
          style={{zIndex: -1}}>
            <div className="parallax-content"></div>
        </Parallax>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;

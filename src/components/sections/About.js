import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Bolby",
  avatarImage: "/images/avatar-2.svg",
  content:
    "Hello, I'm Alex Baker, a recent business graduate based around Dublin. I have a strong background in business administration with a focus on strategic management and marketing. My academic journey has equipped me with a deep understanding of business dynamics and market trends, allowing me to effectively analyze and develop business strategies.",
};

const progressData = [
  {
    id: 1,
    title: "Strategic Planning",
    percantage: 85,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "Market Analysis",
    percantage: 95,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "Financial Management",
    percantage: 70,
    progressColor: "#6C6CE5",
  },
];

const counterData = [
  {
    id: 1,
    title: "Business Case Studies Analysed",
    count: "30",
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Hours of Market Research",
    count: 1200,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Business individuals interviewed",
    count: 50,
    icon: "icon-people",
  },
  {
    id: 4,
    title: "Project distinctions",
    count: 8,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="javascript:void(0);" className="btn btn-default">
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

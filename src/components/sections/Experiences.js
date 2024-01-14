import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "BA Global Business",
    years: "2019-2023",
    content:
      "Developed a comprehensive understanding of business practices, strategy development, and market dynamics.",
  },
  {
    id: 2,
    title: "Leaving Certificate Business",
    years: "2014 - 2019",
    content:
      "Developed proficiency in core business principles, analytical reasoning and baisc business dynamics.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Business Developmet Intern at KerryGold",
    years: "Summer 2022",
    content:
      "Helped organize and coordinate promotional events to increase brand awareness. ",
  },
  {
    id: 2,
    title: "Marketing Intern at PWC",
    years: "Summer 2021",
    content:
      "Assisted in the development and execution of marketing campaigns.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;

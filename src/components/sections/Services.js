import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/service-1.svg",
    title: "Strategic Planning",
    content:
      "Skilled in formulating business strategies, goal setting, and risk management to drive sustainable growth.",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 2,
    icon: "images/service-4.svg",
    title: "Market Analysis",
    content:
      "Expert in market research, data interpretation, and providing insights on consumer trends and competitive landscapes.",
    color: "#F97B8B",
    contentColor: "light",
  },
  {
    id: 3,
    icon: "images/service-5.svg",
    title: "Financial Management",
    content:
      "Competent in budgeting, financial forecasting, and analyzing financial data to support business decision-making.",
    color: "#6C6CE5",
    contentColor: "light",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Expertise" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

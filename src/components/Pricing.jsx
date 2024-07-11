import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing1.avif",
      title: "Lifestyle",
      price: 1000,
      length: 3,
    },
    {
      imgUrl: "/pricing1.avif",
      title: "Preventive meds.",
      price: 4000,
      length: 6,
    },
    {
      imgUrl: "/pricing1.avif",
      title: "Wellness ",
      price: 7000,
      length: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1>ELITE EDGE FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <Check /> Balanced diet
                </p>
                <p>
                  <Check /> Stress management
                </p>
                <p>
                  <Check /> Regular health check-ups
                </p>
                <p>
                  <Check /> 24/7 Skilled Support
                </p>
                <p>
                  <Check /> Regular exercise
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;

import React from "react";
import { faq } from "./data";
const FaqSection = () => {
  return (
    <div>
      {" "}
      <div className="container">
        <div className="accordion" id="accordionExample">
          {faq.map((obj, i) => (
            <div className="accordion-item">
              <h2 className="accordion-header" id={`heading${i}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${i}`}
                  aria-expanded="true"
                  aria-controls={`collapse${i}`}
                >
                  {obj.question}
                </button>
              </h2>
              <div
                id={`collapse${i}`}
                className={`accordion-collapse collapse ${
                  i == 1 ? "show" : ""
                }`}
                aria-labelledby={`heading${i}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">{obj.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;

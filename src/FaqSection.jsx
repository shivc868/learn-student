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
                  Accordion Item #1
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
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;

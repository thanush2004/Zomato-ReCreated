import React, { useState } from "react";
import "./third.css";
import InvBlack from "./InvBlack";

// Import images
import image1 from "./assets/sh0.avif";
import image2 from "./assets/sh1.avif";
import image3 from "./assets/sh2.avif";
import image4 from "./assets/sh3.avif";
import image5 from "./assets/sh4.avif";
import image6 from "./assets/sh5.avif";
import image7 from "./assets/sh6.avif";
import image8 from "./assets/sh7.avif";
import image9 from "./assets/sh8.avif";
import image10 from "./assets/sh9.avif";
import image11 from "./assets/sh10.avif";
import image12 from "./assets/sh11.avif";
import image13 from "./assets/sh12.avif";
import image14 from "./assets/sh13.avif";
import image15 from "./assets/sh14.avif";
import FinDetails from "./fin-details";
import About from "./About";
import InvAbout from "./InvAbout";

function Financials() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
  ];
  const codes = [
    "Q3 FY25",
    "Q2 FY25",
    "Q1 FY25",
    "Q4 FY25",
    "Q3 FY24",
    "Q2 FY24",
    "Q1 FY24",
    "Q4 FY23",
    "Q3 FY23",
    "Q2 FY23",
    "Q1 FY23",
    "Q4 FY22",
    "Q3 FY22",
    "Q2 FY22",
    "Q1 FY22",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentcode, setCurrentcode] = useState(0);
  const visibleImages = 4;

  const handleNext = () => {
    if (currentIndex < images.length - visibleImages) {
      setCurrentIndex(currentIndex + 1);
      setCurrentcode(currentcode + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentcode(currentcode - 1);
    }
  };

  return (
    <>
      <InvBlack />
      <div className="financial-body">
        <div className="financial-contents">
          <div className="financial-h">Financials</div>
          <div className="financial-line line2"></div>
          <div className="financial-imagesliding">
            <div className="financial-para">
              Shareholders' Letter and Results
            </div>
            <button
              className="finimg-prev-btn"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="45"
                height="45"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
              >
                <path d="M18.5 10C18.5 5.3125 14.6875 1.5 10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5 10 18.5C14.6875 18.5 18.5 14.6875 18.5 10ZM0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.5625 5.4375C10.8125 5.75 10.8125 6.1875 10.5625 6.5L7.8125 9.25H14C14.4375 9.25 14.75 9.5625 14.75 10C14.75 10.4375 14.4375 10.75 14 10.75H7.8125L10.5625 13.5C10.8125 13.8125 10.8125 14.25 10.5625 14.5625C10.3125 14.875 9.8125 14.875 9.5 14.5625L5.5 10.5625C5.4375 10.5 5.375 10.4375 5.3125 10.3125C5.3125 10.25 5.25 10.125 5.25 10.0625C5.25 9.875 5.3125 9.6875 5.5 9.5L9.5 5.5C9.75 5.1875 10.25 5.1875 10.5625 5.4375Z"></path>
              </svg>
            </button>
            <button
              className="finimg-next-btn"
              onClick={handleNext}
              disabled={currentIndex >= images.length - visibleImages}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="45"
                height="45"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
              >
                <path d="M1.5 10C1.5 14.6875 5.3125 18.5 10 18.5C14.6875 18.5 18.5 14.6875 18.5 10C18.5 5.3125 14.6875 1.5 10 1.5C5.3125 1.5 1.5 5.3125 1.5 10ZM20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10ZM9.5 14.5C9.1875 14.25 9.1875 13.75 9.5 13.4375L12.25 10.6875H6C5.5625 10.6875 5.25 10.375 5.25 9.9375C5.25 9.5 5.5625 9.1875 6 9.1875H12.1875L9.4375 6.4375C9.125 6.1875 9.125 5.6875 9.4375 5.375C9.75 5.0625 10.1875 5.125 10.5 5.375L14.5 9.375C14.5625 9.4375 14.625 9.5625 14.6875 9.625C14.75 9.75 14.75 9.8125 14.75 9.9375C14.75 10.125 14.6875 10.3125 14.5 10.4375L10.5 14.4375C10.25 14.8125 9.75 14.8125 9.5 14.5Z"></path>
              </svg>
            </button>
          </div>
          <div className="finimg-slider-container">
            <div className="finimg-slider-wrapper">
              <div
                className="finimg-slider"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / visibleImages)
                  }%)`,
                }}
              >
                {images.map((image, index) => (
                  <div key={index} className="finimg-slider-item">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="finimg-slider-img"
                    />
                    <div className="finimg-slider-code">{codes[index]}</div>
                    {index == 0 && (
                      <div className="fining-slider-code-new">NEW</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FinDetails />
      <InvAbout />
    </>
  );
}

export default Financials;

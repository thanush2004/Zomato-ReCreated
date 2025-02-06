import "./fourth.css";
import InvBlack from "./InvBlack";
import { useState } from "react";
import E1 from "./assets/ESG1.avif";
import E2 from "./assets/ESG2.avif";
import E3 from "./assets/ESG3.avif";
import E4 from "./assets/ESG4.avif";
import E5 from "./assets/ESG5.avif";

import env1 from "./assets/env1.png";
import env2 from "./assets/env2.avif";
import env3 from "./assets/env3.avif";

import S1 from "./assets/soc1.png";
import S2 from "./assets/soc2.avif";
import S3 from "./assets/soc3.avif";
import S4 from "./assets/soc4.avif";
import InvAbout from "./InvAbout";

function Esginit() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentcode, setCurrentcode] = useState(0);
  const visibleImages = 4;

  const images = [E1, E2, E3, E4, E5];
  const text = [
    "ESG Factsheet | FY 24",
    "Sustainability’s Highlights and Goals",
    "CDP Report | FY 24",
    "ESG Factsheet | FY 23",
    "ESG Update | June 2022",
  ];

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
      <div className="ESG-body">
        <div className="ESG-conts">
          <div className="ESG-layer1">ESG Initiatives</div>
          <button className="ESG-layer2-ms"> ESG Microsite</button>
          <div className="ESG-layer3-topics">
            <p>Our Sustainability Journey</p>
            <div className="ESG-layer3-svgs">
              <button
                className="ESG-prev-btn"
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
                className="ESG-next-btn"
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
          </div>
          <div className="ESG-images-grid">
            {images
              .slice(currentIndex, currentIndex + visibleImages)
              .map((img, index) => (
                <div className="ESG-images-boxes" key={index}>
                  <img src={img} alt={`ESG ${index}`} />
                  <div className="ESG-images-des">{text[index]}</div>
                </div>
              ))}
          </div>
          <div className="ESG-line"></div>
          <div className="ESG-topic2">Environmental</div>
          <div className="ESG-layer4">
            <div className="ESG-boxes-1">
              <div className="ESG-layer4-box1">
                <div className="ESG-layer4-cont1">
                  <div className="ESG-layer4-cont-detail">
                    Offsetting Our Carbon Footprint
                  </div>
                  <div className="ESG-layer4-cont">
                    We fund global environmental projects to offset the carbon
                    footprint of delivery and packaging.
                  </div>
                </div>
                <img src={env1}></img>
              </div>
              <div className="ESG-layer4-box2">
                <div className="ESG-layer4-cont1">
                  <div className="ESG-layer4-cont-detail">
                    100% EV Adoption For Delivery by 2030
                  </div>
                  <div className="ESG-layer4-cont">
                    We have joined the EV100 initiative by The Climate Group and
                    are committing to 100% adoption of electric vehicles by
                    2030.
                  </div>
                </div>
                <img src={env2}></img>
              </div>
            </div>
          </div>
          <div className="ESG-layer4">
            <div className="ESG-boxes-1">
              <div className="ESG-layer4-box1">
                <div className="ESG-layer4-cont1">
                  <div className="ESG-layer4-cont-detail">
                    Bicycle Deliveries
                  </div>
                  <div className="ESG-layer4-cont">
                    20% of our deliveries are made on bicycles.
                  </div>
                </div>
                <img src={env3}></img>
              </div>
            </div>
          </div>
          <div className="ESG-topic2 social">Social</div>
          <div className="ESG-social-container">
            <div className="ESG-social-cont1">
              <div className="ESG-social-box1">
                <div className="ESG-social-box1-conts">
                  <h1>Oxygen For India</h1>
                  <div className="ESG-social-lines"></div>
                  <p>
                    In a public private partnership, Feeding India raised money
                    for and procured ~9,000 oxygen concentrators to send to
                    COVID hit areas across the country.
                  </p>
                </div>
                <img src={S1}></img>
              </div>
              <div className="ESG-social-box1">
                <div className="ESG-social-box1-conts">
                  <h1>Vaccinating Delivery Partners</h1>
                  <div className="ESG-social-lines"></div>
                  <p>
                    Zomato launched a free vaccination drive for our delivery
                    partners in India along with the introduction of COVID
                    insurance. A COVID relief fund was also setup for restaurant
                    workers hit by the pandemic
                  </p>
                </div>
                <img src={S2}></img>
              </div>
            </div>
            <div className="ESG-social-cont1">
              <div className="ESG-social-box1">
                <div className="ESG-social-box1-conts">
                  <h1>Feed The Daily Wager</h1>
                  <div className="ESG-social-lines"></div>
                  <p>
                    During the COVID-19 pandemic, Zomato Feeding India provided
                    food support to daily wage earners who lost their livelihood
                    due to lockdown. A total of 78 million meals were
                    distributed within a few weeks.
                  </p>
                </div>
                <img src={S3}></img>
              </div>
              <div className="ESG-social-box1">
                <div className="ESG-social-box1-conts">
                  <h1>Feeding India By Zomato</h1>
                  <div className="ESG-social-lines"></div>
                  <p>
                    Feeding India has also partnered with a third-party in 2021
                    to support up to 10,000 orphaned children with education and
                    food support​.
                  </p>
                </div>
                <img src={S4}></img>
              </div>
            </div>
            <div className="ESG-final-box">
              <h1 className="ESG-final-box-topic">Inclusion And Diversity</h1>
              <div className="ESG-social-final-conts">
                <div className="ESG-final-social-lines"></div>
                <div className="ESG-fin1">
                  <div className="ESG-final-cont-1">
                    <p>Period Leave</p>
                    <h1>
                      We introduced up to 10 days of period leaves in a year,
                      for all women (including transgender people).
                    </h1>
                  </div>
                  <div className="ESG-final-cont-1">
                    <p>Paternal Leaves</p>
                    <h1>Introduced up to 26 weeks of paid paternal leave.</h1>
                  </div>
                </div>
                <div className="ESG-fin2">
                  <div className="ESG-final-cont2">
                    <p>Cognitive and Gender Diversity on Our Board</p>
                    <h1>
                      In the eight member board, we have four women independent
                      directors.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="ESG-final-box-2">
              <h1 className="ESG-final-topic">Governance</h1>
              <div className="ESG-social-final-conts">
                <div className="ESG-fin1">
                  <div className="ESG-final-cont-1">
                    <p>Transparency</p>
                    <h1>
                      We have been publishing our annual performance reports on
                      our website for the last three years in spite of being a
                      private company.
                    </h1>
                  </div>
                  <div className="ESG-final-cont-1">
                    <p>Independent Board</p>
                    <h1>
                      5 out of 8 board members are independent. The chairman of
                      our board is an independent director.
                    </h1>
                  </div>
                </div>
                <div className="ESG-fin2">
                  <div className="ESG-final-cont2">
                    <p>Equal Voting Rights</p>
                    <h1>
                      No differential voting rights are available to the Founder
                      or any other shareholder.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InvAbout />
    </>
  );
}
export default Esginit;

import React, { useState, useEffect } from "react";
import "./second.css";
import InvAbout from "./InvAbout";
import zomlogo from "./assets/zomlogo.avif";
import feed from "./assets/feed.webp";
import blinkit from "./assets/blinkit.webp";
import hyperpure from "./assets/hyperpure.webp";
import icon1 from "./assets/icon1.webp";
import icon2 from "./assets/icon2.webp";
import icon3 from "./assets/icon3.webp";
import icon4 from "./assets/icon4.webp";
import Aicon from "./assets/arrow_icon.webp";
import logo3 from "./assets/hyperlogo.avif";
import logo2 from "./assets/blinkitlogo.avif";
import logo1 from "./assets/zomatologo.avif";
import bey1 from "./assets/bey1.avif";
import bey2 from "./assets/bey2.avif";
import bey3 from "./assets/bey3.avif";
import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";

import "./index.css";
import InvRed from "./InvRed";
import InvBlack from "./InvBlack";
function Investor() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Download = (filePath) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "ONE.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  return (
    <>
      {isScrolled ? <InvBlack /> : <InvRed />}

      <div className="invnavlayer">
        <div className="inv2layer1">
          <div className="inv2layer11">Better food for more people</div>
          <div className="invlevel1">
            <img src={zomlogo} className="logo1"></img>
            <img src={hyperpure} className="logo2"></img>
          </div>
          <div className="navlines1"></div>
          <div className="inv2layer12">
            Instant commerce indistinguishable from magic
          </div>
          <img src={blinkit} className="logo3"></img>
          <div className="navlines2"></div>
          <div className="inv2layer12">Make India malnutrition free</div>
          <img src={feed} className="logo4"></img>
        </div>
        <div className="inv2layer">
          <div className="inv2layer2">
            <div className="inv2layer21">
              <div className="inv2layer21p">Company overview</div>
            </div>

            <button
              className="inv2layer22"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Zomato_overview_deck_May24.pdf";
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                link.click();
              }}
            >
              <div className="innerbox">
                <img src={icon1}></img>
              </div>
              <p>Presentation</p>
              <img src={Aicon} className="icon5"></img>
            </button>
            <div className="inv2layer23">
              <p>Q2FY25 results</p>
              <p className="seeall">see all</p>
            </div>
            <button
              className="inv2layer22"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Shareholder.pdf";
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                link.click();
              }}
            >
              <div className="innerbox">
                <img src={icon2}></img>
              </div>
              <p>Shareholders' Letter</p>
              <img src={Aicon} className="icon52"></img>
            </button>
            <button
              className="inv2layer22"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Earnings.mp3";
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                link.click();
              }}
            >
              <div className="innerbox">
                <img src={icon3}></img>
              </div>
              <p>Earnings Call Replay</p>
              <img src={Aicon} className="icon53"></img>
            </button>
            <button
              className="inv2layer22"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Transcript.pdf";
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                link.click();
              }}
            >
              <div className="innerbox">
                <img src={icon4}></img>
              </div>
              <p>Earnings Call Transcript</p>
              <img src={Aicon} className="icon54"></img>
            </button>
          </div>
        </div>
      </div>

      <div class="offering">
        <div class="offerlayer">
          <div class="offp">Our core offerings</div>
          <div class="offlevel1">
            <div class="offbox">
              <div class="box-header">
                <div class="box-title">Food delivery</div>
                <div class="logo-wrapper">
                  <img src={logo1} alt="Zomato Logo" class="logo" />
                </div>
              </div>
              <div class="box-content">
                Food ordering and delivery platform where customers can search
                and discover local restaurants, order food, and have it
                delivered reliably and quickly
              </div>
              <div class="box-footer">
                <div>Q2FY25</div>
              </div>
              <div className="box-footer1"></div>
              <div className="box-footer2">
                <div className="footer1">
                  <div className="footer11">INR 9,690 crore</div>{" "}
                  <div className="footer12">Food delivery GOV</div>
                </div>
                <div className="footer2">
                  <div className="footer21">20.7 million</div>
                  <div className="footer22">
                    Avg. monthly transacting customers
                  </div>
                </div>
              </div>
            </div>

            <div class="offbox">
              <div class="box-header">
                <div class="box-title">Quick commerce</div>
                <div class="logo-wrapper">
                  <img src={logo2} alt="Blinkit Logo" class="logo" />
                </div>
              </div>
              <div class="box-content">
                Quick commerce platform where customers can order everyday needs
                across thousands of products and have them delivered within
                minutes
              </div>
              <div class="box-footer">
                <div>Q2FY25</div>
              </div>
              <div className="box-footer1"></div>
              <div className="box-footer2">
                <div className="footer1">
                  <div className="footer11">INR 6,132 crore</div>{" "}
                  <div className="footer12">Quick commerce GOV</div>
                </div>
                <div className="footer2">
                  <div className="footer21">8.9 million</div>
                  <div className="footer22">
                    Avg. monthly transacting customers
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="offlevel1">
            <div class="offbox">
              <div class="box-header">
                <div class="box-title">Hyperpure</div>
                <div class="logo-wrapper">
                  <img src={logo3} alt="Zomato Logo" class="logo" />
                </div>
              </div>
              <div class="box-content">
                Hyperpure is a B2B platform supplying high quality food
                ingredients and other products
              </div>
              <div class="box-footer">
                <div>Q2FY25</div>
              </div>
              <div className="box-footer1"></div>
              <div className="box-footer2b">
                <div className="footer1">
                  <div className="footer11">INR 1,473 crore</div>{" "}
                  <div className="footer12">Hyperpure revenue</div>
                </div>
                <div className="footer2">
                  <div className="footer21">8</div>
                  <div className="footer22"># of cities present in</div>
                </div>
              </div>
            </div>

            <div class="offbox">
              <div class="box-header">
                <div class="box-title">Going-out</div>
                <div class="logo-wrapper">
                  <img src={logo1} alt="Blinkit Logo" class="logo" />
                </div>
              </div>
              <div class="box-content2">
                Going-out enables discovery and ticketing of offline experiences
                such as in-restaurant dining and live events such as Zomaland
              </div>
              <div class="box-footer">
                <div>Q2FY25</div>
              </div>
              <div className="box-footer1"></div>
              <div className="box-footer2a">
                <div className="footer1">
                  <div className="footer11">INR 1,849 crore</div>{" "}
                  <div className="footer12">Going-out GOV</div>
                </div>
                <div className="footer2">
                  <div className="footer21">INR 154 crore</div>
                  <div className="footer22">Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="beyond">
        <div className="beyond-layer">
          <div className="beyp">Beyond business</div>
          <div className="beyh">
            At Zomato, our business approach is guided by our commitment to
            responsible and sustainable growth. Our ESG update outlines the many
            ways in which we make the impact of our business more sustainable
            and help make the world a better place for everyone. Some of our key
            sustainability initiatives include:
          </div>
          <div className="beynav">
            <div className="bey1">
              <img src={bey1} className="beypics"></img>
              <div className="bey1topic">Feeding India</div>
              <div className="bey1cont">
                A not-for-profit organisation, designing interventions to reduce
                hunger and malnutrition among underserved communities in India
              </div>
            </div>
            <div className="bey2">
              <img src={bey2} className="beypics"></img>
              <div className="bey1topic">Net zero emissions</div>
              <div className="bey1cont">
                Starting FY24, we have taken on a goal to achieve Net Zero
                emissions across Zomato’s food delivery value chain by 2033
              </div>
            </div>
            <div className="bey3">
              <img src={bey3} className="beypics"></img>
              <div className="bey1topic">Reducing plastic waste</div>
              <div className="bey1cont">
                Trying to reduce Zomato’s plastic waste by ensuring completely
                plastic neutral deliveries since April 2022
              </div>
            </div>
          </div>
          <button
            className="beyondfootp"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/ONE.pdf"; // Path to the file in the public folder
              link.target = "_blank"; // Open in a new tab
              link.rel = "noopener noreferrer"; // Security best practice
              link.click(); // Trigger the click event
            }}
          >
            See the latest ESG update
          </button>
        </div>
      </div>
      <div className="beyond">
        <div className="beyond-layer">
          <div className="corp">Corporate announcements</div>
          <div className="beyconts">
            <div className="beyline"></div>
            <div className="beydate">22 December 2024</div>
            <div className="beyheadline">
              Zomato - Closure of trading window
            </div>
            <div className="readmore">
              <button
                className="beytext"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/CA1.pdf";
                  link.target = "_blank";
                  link.rel = "noopener noreferrer";
                  link.click();
                }}
              >
                Read More
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#EF4F5F"
                width="12"
                height="12"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 ezrcri"
                className="readmorearrow"
              >
                <title>right-triangle</title>
                <path d="M5 0.42l10 10-10 10v-20z"></path>
              </svg>
            </div>
            <div className="beyline"></div>
            <div className="beydate">22 December 2024</div>
            <div className="beyheadline2">
              Zomato - Disclosure under Regulation 30 (Resignation of Ms. Hemal
              Jain, Head - Business Finance)
            </div>
            <div className="readmore">
              <button
                className="beytext"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/CA2.pdf";
                  link.target = "_blank";
                  link.rel = "noopener noreferrer";
                  link.click();
                }}
              >
                Read More
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#EF4F5F"
                width="12"
                height="12"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 ezrcri"
                className="readmorearrow"
              >
                <title>right-triangle</title>
                <path d="M5 0.42l10 10-10 10v-20z"></path>
              </svg>
            </div>
          </div>
          <div className="announce">See all announcements</div>
        </div>
      </div>
      <div className="blogs">
        <div className="blogslayer">
          <div className="blogslevel1">From our blogs</div>
          <div className="blogsnav">
            <div className="blogs1">
              <img src={blog1} className="blog1"></img>
              <div className="rest">Restaurants</div>
            </div>
            <div className="blogs2">
              <img src={blog2} className="blog1"></img>
              <div className="rest">Restaurants</div>
            </div>
            <div className="blogs3">
              <img src={blog3} className="blog1"></img>
              <div className="rest">Restaurants</div>
            </div>
          </div>
          <div className="blogdates">
            <div className="dates1">
              <div className="dates11">Shuvra Saha | 27 December 2024</div>
              <div className="dates12">
                The Big Brand Theory | Carving a S...
              </div>
              <div className="dates13">
                Explore how the fusion of tradition and innovation shaped the
                creation of a legacy brand.
              </div>
            </div>
            <div className="dates2">
              <div className="dates21">Shuvra Saha | 16 December 2024</div>
              <div className="dates22">The Big Brand Theory | From Trek...</div>
              <div className="dates23">
                Discover how the founders of Amore Gelato are bringing the true
                taste of Italian gelato to India!
              </div>
            </div>
            <div className="dates3">
              <div className="dates31">Anjalli Kumar | 13 December 2024</div>
              <div className="dates32">
                Introducing Zomato’s Plastic-Free F...
              </div>
              <div className="dates33">
                Recognizing restaurant partners for embracing plastic-free food
                delivery packaging options
              </div>
            </div>
          </div>
          <div className="readblogs">Read our blogs</div>
        </div>
      </div>
      <div className="mailing">
        <div className="mail">
          <div className="mailside1">
            <div className="mailside11">Subscribe to our email alerts</div>
            <div className="mailside12">Get regular updates through email.</div>
            <input
              className="mailside13"
              placeholder="Email"
              type="mail"
            ></input>
            <div className="mailside14">Subscribe</div>
          </div>
          <div className="mailside2">
            <div className="mailside21">Have questions?</div>
            <div className="mailside22">
              Reach out to us by emailing at shareholders@zomato.com, and we’ll
              get back to you.
            </div>
            <div className="mailside23">Contact Us</div>
          </div>
        </div>
      </div>

      <InvAbout />
    </>
  );
}

export default Investor;

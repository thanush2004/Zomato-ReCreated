import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InvBlack from "./InvBlack";
import InvAbout from "./InvAbout";
import "./fourth.css";
import p1 from "./assets/photo1.avif";
import p2 from "./assets/photo2.avif";
import p3 from "./assets/photo3.avif";
import p4 from "./assets/photo4.avif";
import p5 from "./assets/photo5.avif";
import p6 from "./assets/photo6.avif";

function PersonClicked() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, no, role } = location.state || {};

  // Array of images and details
  const imgs = [p1, p2, p3, p4, p5, p6];
  const details = [
    "Kaushik Dutta is the Chairman and an Independent Director of our Company. He is a fellow member of the Institute of Chartered Accountants of India with over 25 years of experience. He is co-founder of Thought Arbitrage Research Institute, an independent not-for-profit research think tank working in areas of corporate governance, public policy and sustainability. He was also associated with Price Waterhouse & Co., Chartered Accountants LLP, and Lovelock & Lewes, Chartered Accountants as Partner for over 25 years. He has been retained as an expert on corporate governance by the Indian Institute of Corporate Affairs of the Ministry of Corporate Affairs in matters relating to future of corporate governance in India​.",
    "Deepinder Goyal is our Founder and is the Managing Director and the Chief Executive Officer of our Company. He holds an integrated master’s degree of technology in mathematics and computing from the Indian Institute of Technology, Delhi. Prior to founding Zomato, he worked with Bain and Company​.",
    "Sanjeev Bikhchandani is a Non-Executive Director of our Company, and a nominee of Info Edge on our Board. He holds a bachelor’s degree of arts in economics from the University of Delhi and a post graduate diploma in management from the Indian Institute of Management, Ahmedabad. He is the founder and an executive director on the board of directors of Info Edge​.",
    "Sutapa Banerjee has over three decades of professional experience. She spent 24 years in the financial services industry across 2 large multinational banks (ANZ Grindlays and ABN AMRO), and a boutique Indian Investment bank (Ambit) where she built and headed several businesses. A well-recognized thought leader in the Wealth Management space having headed and successfully built from scratch the Private Wealth businesses in both ABN AMRO Bank and Ambit Capital, Sutapa was voted one of the ‘Top 20 Global Rising Stars of Wealth Management’ by the Institutional Investor Group in 2007 - the only Indian and one of only two winners from Asia.",
    "Namita Gupta is an Independent Director of our Company. She holds an integrated master’s degree of technology in mathematics and computing from the Indian Institute of Technology, Delhi. She has previously worked with Facebook, Inc. and Microsoft for several years. She is the founder and currently on the board of directors of Airveda Technologies Private Limited​.",
    "Aparna Popat Ved is an Independent Director of our Company. She holds a bachelor’s degree in commerce from the University of Mumbai and a master’s degree of business administration from the Sikkim Manipal University. She is a professional badminton player having represented India at various international forums including the Commonwealth Games (where she also won a silver and three bronze medals) and the Olympics in 2000 and 2004.​",
  ];

  const validIndex = no !== undefined && !isNaN(no) ? parseInt(no, 10) : 0;

  return (
    <>
      <InvBlack />
      <div className="pc-body">
        <div className="pc-conts">
          <button
            className="pc-button1"
            onClick={() => {
              navigate("/governance");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#EF4F5F"
              width="10"
              height="10"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              className="sc-rbbb40-0 gvsUip"
            >
              <title>right-triangle-small</title>
              <path d="M13.34 3.34l-6.68 6.66 6.68 6.66z"></path>
            </svg>
            <p>Back to Board</p>
          </button>
          <h1>{name || "Person Name"}</h1>
          <h2>{role || "Person Role"}</h2>
          <div className="pc-line"></div>
          <div className="pc-div">
            <div className="pc-div-1">
              {details[validIndex] || "Details not available for this person."}
            </div>
            <img
              src={imgs[validIndex] || p1}
              alt={name || "Person"}
              className="person-image"
            />
          </div>
        </div>
      </div>
      <InvAbout />
    </>
  );
}

export default PersonClicked;

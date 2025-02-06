import "./second.css";
import Blacklogo from "./assets/black-zomato.avif";
import { Link, useNavigate } from "react-router-dom";
import { React, useState } from "react";
function Investor() {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="invnav">
        <div className="innavconts">
          <div className="innavcs1">
            <img src={Blacklogo} className="innavlogo"></img>
            <svg width="30" height="50" viewBox="0 0 30 30">
              <line
                x1="15"
                y1="22"
                x2="15"
                y2="46"
                stroke="black"
                stroke-width="1"
                className="strokes"
              />
            </svg>
            <p className="innavp"> Investor Relations</p>
          </div>
          <div className="innav-flex">
            <div className="innavcs">
              <p className="innavp2">
                <Link to="/Inv" className="white-color">
                  Home
                </Link>
              </p>
              <p className="innavp2">
                <Link to="/financials" className="white-color">
                  Financials
                </Link>
              </p>
              <p className="innavp2">
                <Link to="/Announcement" className="white-color">
                  Announcements
                </Link>
              </p>
              <p className="innavp2">
                <a
                  href="https://blog.zomato.com/"
                  target="_blank"
                  className="white-color"
                >
                  Blog
                </a>
              </p>
              <p className="innavp2">
                <Link to="/governance" className="white-color">
                  Governance
                </Link>
              </p>

              <div
                className="innavp2-hoverbox"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div className="innavp2-svg">
                  <p className="innavp2">ESG</p>
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    className="darrow"
                  >
                    <path
                      d="M12 19L7.5 14.5L6 16L12 21L18 16L16.5 14.5L12 19Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                {hovered && (
                  <div className="innavp2-hover">
                    <button
                      className="innavp2-hover-1"
                      onClick={() => navigate("/Esginit")}
                    >
                      ESG Initiatives
                    </button>
                    <button className="innavp2-hover-2">ESG Microsite</button>
                  </div>
                )}
              </div>
            </div>
            <p className="innavp21">
              <Link to="/resources" className="white-color">
                Resources
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Investor;

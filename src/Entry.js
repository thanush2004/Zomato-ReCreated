import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import zomlogo from "./assets/zomlogo.avif";
import Zom_mobile from "./zom_mobile";
import Login from "./login";
import About from "./About";
import Signup from "./Signup";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&amp;display=swa"
></link>;

function Entry() {
  const [showLogin, setShowLogin] = useState(false);
  const [showLogin2, setShowLogin2] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
    document.body.classList.add("modal-open");
  };

  const closeLogin = () => {
    setShowLogin(false);
    document.body.classList.remove("modal-open");
  };
  const openLogin2 = () => {
    setShowLogin2(true);
    document.body.classList.add("modal-open2");
  };

  const closeLogin2 = () => {
    setShowLogin2(false);
    document.body.classList.remove("modal-open2");
  };
  return (
    <>
      <div className="container">
        <div className="nav">
          <div className="navbar">
            <div className="first">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
              >
                <path d="M18.5793 9.18939H16.5865H16.3199C15.7307 9.18939 15.2529 9.6672 15.2529 10.2583V10.3742C15.2529 10.9659 15.7307 11.444 16.3207 11.444H18.3156H18.5793C19.1696 11.444 19.6488 10.9639 19.6488 10.3742L19.6477 10.2569C19.6488 9.6672 19.1696 9.18939 18.5793 9.18939Z"></path>
                <path d="M18.5804 6.52262H18.1097V1.35122C18.1097 0.607964 17.5017 0 16.7582 0H7.84167C7.09841 0 6.49045 0.608249 6.49045 1.35122V5.06151C4.69196 6.07821 2.83696 7.14029 2.83296 7.14286C1.82597 7.5573 0.350586 8.89453 0.350586 12.0522C0.350586 12.3342 0.369139 12.5945 0.395113 12.846C0.40339 12.9197 0.412524 12.9904 0.422514 13.0615C0.448488 13.2462 0.481027 13.4229 0.519845 13.5907C0.533831 13.6506 0.544678 13.7131 0.559805 13.7705C0.612039 13.9646 0.67255 14.1467 0.740482 14.32C0.774733 14.4059 0.811839 14.4841 0.84923 14.5646C0.88919 14.6494 0.929436 14.7327 0.972535 14.8106C1.02249 14.9045 1.07244 14.995 1.12724 15.0809C1.14037 15.1009 1.15464 15.1192 1.16805 15.1394C2.46847 17.1052 4.8675 17.114 4.8675 17.114H6.49045V18.6494C6.49045 19.3918 7.09841 19.9997 7.84167 19.9997H16.7579C17.5014 19.9997 18.1094 19.3915 18.1094 18.6494V16.7767H18.3155V16.7755H18.5784C19.1695 16.7755 19.6487 16.2974 19.6476 15.7063L19.6487 15.5898C19.6476 14.9996 19.1695 14.5229 18.5792 14.5229H18.3155H16.5861H16.3195C15.7292 14.5229 15.2525 15.0007 15.2525 15.5907V15.7091C15.2525 16.2977 15.7304 16.7775 16.3203 16.7775H17.1692V17.5008H7.43036V7.79877C7.91959 7.48851 8.37256 7.18995 8.63088 6.98987C9.93957 5.97774 11.1818 5.17169 11.3499 4.4407C11.5688 3.49222 10.8407 2.69302 9.57765 3.34922C9.17976 3.55587 8.36315 4.00885 7.43036 4.53261V2.14129L17.1692 2.14271V6.52205H16.5861V6.52319H16.3209C15.7304 6.52319 15.2511 7.001 15.2511 7.59269V7.70858C15.2511 8.29999 15.7303 8.77665 16.3195 8.77665H16.5846H18.3141H18.5798C19.1695 8.77665 19.6476 8.29884 19.6476 7.70858V7.58955C19.6487 7.00186 19.1709 6.52262 18.5804 6.52262ZM12.2986 17.9752C12.6731 17.9752 12.9751 18.2774 12.9751 18.6511C12.9751 19.0255 12.6728 19.3267 12.2986 19.3267C11.9256 19.3267 11.6242 19.0247 11.6242 18.6511C11.6247 18.2786 11.927 17.9752 12.2986 17.9752ZM13.7266 1.30098H10.8735C10.7839 1.30098 10.7097 1.2282 10.7097 1.13829C10.7097 1.04695 10.7839 0.974169 10.8735 0.974169H13.7266C13.8163 0.974169 13.8893 1.04667 13.8893 1.13829C13.8893 1.22792 13.8163 1.30098 13.7266 1.30098Z"></path>
              </svg>
              <p>
                <Link to="/getApp">Get the App</Link>
              </p>
            </div>
            <div className="nav-items">
              <p>
                <Link to="/Inv">Investor Relations</Link>
              </p>
              <p className="res">
                <Link to="/AddRes">Add restaurant</Link>
              </p>
              <p className="login" onClick={openLogin}>
                Login
              </p>
              <p className="signup" onClick={openLogin2}>
                Sign up
              </p>
            </div>
          </div>
        </div>
        <div className="inner">
          <img src={zomlogo} alt="Zomato Logo" className="entrylogo" />
          <br />
          <h1 className="sample">Discover the best food & drinks in</h1>
          <span className="coimbatore">&nbsp;Coimbatore</span>
          <br />
          <div className="searchbox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FF7E8B"
              width="20"
              height="25"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              className="sc-rbbb40-0 iRDDBk"
            >
              <title>location-fill</title>
              <path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path>
            </svg>
            <input type="text" className="inp1" placeholder="Coimbatore" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#4F4F4F"
              width="12"
              height="12"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="sc-rbbb40-0 ezrcri"
            >
              <title>down-triangle</title>
              <path d="M20 5.42l-10 10-10-10h20z"></path>
            </svg>

            <svg
              width="10"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              className="bar"
            >
              <rect
                x="5"
                y="0"
                width="1"
                height="25"
                fill="rgb(163, 161, 161)"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#828282"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="sc-rbbb40-0 iwHbVQ"
            >
              <title>Search</title>
              <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
            </svg>
            <input
              placeholder="Search for restaurant, cuisine or a dish"
              className="inp"
              value=""
            />
          </div>
        </div>
      </div>
      <div className="sec-layer">
        <div className="content">
          <div className="secbox1">
            <div className="sec1cont">Order Online</div>
            <div className="sec1cont2">
              Stay home and order to your doorstop
            </div>
          </div>
          <div className="secbox2">
            <div className="sec2cont">Dining</div>
            <div className="sec2cont2">
              View the city's favourite dining venues
            </div>
          </div>
        </div>
      </div>
      <div className="trilayer">
        <div className="tri-cont">
          <div className="cont1">Collections</div>
          <div className="conts2">
            <div className="cont2">
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Coimbatore, based on trends
            </div>
            <div className="cont22">All collections in Coimbatore</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FF7E8B"
              width="12"
              height="12"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="sc-rbbb40-0 ezrcri"
            >
              <title>right-triangle</title>
              <path d="M5 0.42l10 10-10 10v-20z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="for-layer">
        <div className="cont-box">
          <div className="box1">
            <p>New Year's Celebration</p>
            <p>
              12 places{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                width="10"
                height="10"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 gvsUip"
              >
                <title>right-triangle</title>
                <path d="M5 0.42l10 10-10 10v-20z"></path>
              </svg>
            </p>
          </div>
          <div className="box2">
            <p>Great Cafes</p>
            <p>
              11 places{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                width="10"
                height="10"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 gvsUip"
              >
                <title>right-triangle</title>
                <path d="M5 0.42l10 10-10 10v-20z"></path>
              </svg>
            </p>
          </div>
          <div className="box3">
            <p>11 Best Pubs and Bars</p>
            <p>
              7 places{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                width="10"
                height="10"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 gvsUip"
              >
                <title>right-triangle</title>
                <path d="M5 0.42l10 10-10 10v-20z"></path>
              </svg>
            </p>
          </div>
          <div className="box4">
            <p>Blissful Breakfast Places</p>
            <p>
              8 places{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                width="10"
                height="10"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 gvsUip"
              >
                <title>right-triangle</title>
                <path d="M5 0.42l10 10-10 10v-20z"></path>
              </svg>
            </p>
          </div>
        </div>
      </div>
      <div className="five-layer">
        <div className="five-conts">
          <div className="fcont1">
            Popular localities in and around <b>Coimbatore</b>
          </div>
        </div>
      </div>
      <div className="six-layer">
        <div class="grid-container">
          <div class="grid-box">
            RS Puram{" "}
            <p className="svgs">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1C1C1C"
                width="15"
                height="15"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 jKmKoK"
              >
                <title>chevron-right</title>
                <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
              </svg>
            </p>
            <p className="par">365 places</p>
          </div>
          <div class="grid-box">
            Peelamedu
            <p className="svgs">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1C1C1C"
                width="15"
                height="15"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 jKmKoK"
              >
                <title>chevron-right</title>
                <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
              </svg>
            </p>
            <p className="par">550 places</p>
          </div>
          <div class="grid-box">
            Race Course{" "}
            <p className="svgs">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1C1C1C"
                width="15"
                height="15"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 jKmKoK"
              >
                <title>chevron-right</title>
                <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
              </svg>
            </p>{" "}
            <p className="par">96 places</p>
          </div>
          <div class="grid-box">
            Saibaba Colony{" "}
            <p className="svgs">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1C1C1C"
                width="15"
                height="15"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 jKmKoK"
              >
                <title>chevron-right</title>
                <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
              </svg>
            </p>{" "}
            <p className="par">284 places</p>
          </div>
          <div class="grid-box">
            Gandhipuram{" "}
            <p className="svgs">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1C1C1C"
                width="15"
                height="15"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 jKmKoK"
              >
                <title>chevron-right</title>
                <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
              </svg>
            </p>
            <p className="par">299 places</p>
          </div>
          <div class="grid-box">
            Town Hall{" "}
            <p className="svgs">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1C1C1C"
                width="15"
                height="15"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 jKmKoK"
              >
                <title>chevron-right</title>
                <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
              </svg>
            </p>
            <p className="par">164 places</p>
          </div>
          <div class="grid-box">
            Ramanathapuram{" "}
            <p className="svgs">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1C1C1C"
                width="15"
                height="15"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 jKmKoK"
              >
                <title>chevron-right</title>
                <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
              </svg>
            </p>{" "}
            <p className="par">169 places</p>
          </div>
          <div class="grid-box">
            Kalapatti{" "}
            <p className="svgs">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1C1C1C"
                width="15"
                height="15"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 jKmKoK"
              >
                <title>chevron-right</title>
                <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
              </svg>
            </p>{" "}
            <p className="par">95 places</p>
          </div>
          <div class="grid-box">
            <p className="gpara">
              {" "}
              see more{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1C1C1C"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 iwHbVQ"
              >
                <title>chevron-down</title>
                <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
              </svg>{" "}
            </p>
          </div>
        </div>
      </div>
      <Zom_mobile />
      <div className="explore">
        <div className="exp-conts">Explore options near me</div>
        <div className="expnav">
          <div className="exp1">
            Popular Cuisines Near Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#1C1C1C"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="sc-rbbb40-0 iRDDBk"
            >
              <title>chevron-down</title>
              <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
            </svg>
          </div>
          <div className="exp1">
            Popular Restaurant Types Near me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#1C1C1C"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="sc-rbbb40-0 iRDDBk"
            >
              <title>chevron-down</title>
              <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
            </svg>
          </div>
          <div className="exp1">
            Top Restaurant Chains{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#1C1C1C"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="sc-rbbb40-0 iRDDBk"
            >
              <title>chevron-down</title>
              <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
            </svg>
          </div>
          <div className="exp1">
            TCities We Deliver To{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#1C1C1C"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="sc-rbbb40-0 iRDDBk"
            >
              <title>chevron-down</title>
              <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
            </svg>
          </div>
        </div>
      </div>
      <About />
      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <Login closeLogin={closeLogin} />
          </div>
        </div>
      )}
      {showLogin2 && (
        <div className="modal">
          <div className="modal-content2">
            <Signup closeLogin2={closeLogin2} />
          </div>
        </div>
      )}
    </>
  );
}

export default Entry;

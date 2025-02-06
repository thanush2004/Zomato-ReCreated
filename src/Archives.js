import "./fourth.css";
import { React, useState } from "react";
function Archives() {
  const [svgon, setSvgon] = useState(true);
  const det1 = [
    "FY24 - Blink Commerce Private Limited",
    "FY24 - Tonguestun Food Network Private Limited",
    "FY24 - Zomato Financial Services Limited",
    "FY24 - Zomato Hyperpure Private Limited",
    "FY24-Blink Commerce Private Limited",
    "FY24-Tonguestun Food Network Private Limited ",
    "FY24- Zomato Financial Services Limited ",
    "FY24- Zomato Hyperpure Private Limited ",
    "FY24- Zomato Payments Private Limited ",
    "FY24-Gastronauci Sp.Z.O.O. ",
    "FY24- Zomato Internet LLC",
    "FY24- Zomato Malaysia Sdn. Bhd",
    "FY24- Zomato Middle East Fz - LLC",
    "FY24-Zomato Philippines Inc",
    "FY24-Zomato, Inc",
    "FY23 - Zomato Middle East FZ LLC",
  ];
  const det2 = [
    "FY23-Zomato Internet LLC",
    "FY23-PT. Zomato Media Indonesia",
    "FY23-Zomato Media (Private) Limited, Sri Lanka",
    "FY23-Zomato Chile SpA",
    "FY23-Zomato Internet Hizmetleri Ticaret Anonim Sirk",
    "FY23 - Zomato Media Portugal, Unipessoal, Lda",
    "FY23-Zomato NZ Media Pvt. Ltd",
    "FY23 - Zomato Philippines Inc",
    "FY23 - Carthero Technologies Private Limited",
    "FY23-Zomato Financial Services Limited >",
    "FY23-Zomato Foods Private Limited",
    "FY23- Zomato Tonguestun Private Limited",
    "FY23-Zomato Ireland Limited",
    "Carthero Technologies Private Limited",
    "Zomato Entertainment Private Limited",
    "Zomato Hyperpure Private Limited",
  ];
  function check() {
    if (svgon) setSvgon(false);
    else setSvgon(true);
  }
  return (
    <>
      <div className="A-body">
        <div className="A-contents">
          <div className="A-boxes">
            <div className="A-box1">
              <div className="A-box1-conts">
                <p>Financial Statements FY21</p>
              </div>
              <div className="A-line"> </div>
              <div className="A-box1-conts">
                <p>Financial Statements FY20</p>
              </div>
              <div className="A-line"> </div>
              <div className="A-box1-conts">
                <p>Financial Statements FY19</p>
              </div>
            </div>
            <div className="A-box2">
              <div className="A-box2-inner">
                <button className="A-box2-inbox">
                  <p>Zomato Consolidated</p>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#EF4F5F"
                    width="28"
                    height="28"
                    viewBox="0 0 20 20"
                    aria-labelledby="icon-svg-title- icon-svg-desc-"
                    role="img"
                    class="sc-rbbb40-0 fNHveS"
                  >
                    <title>chevron-right</title>
                    <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                  </svg>
                </button>
              </div>
              <div className="A-box2-inner">
                <button className="A-box2-inbox">
                  <p>Zomato Consolidated</p>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#EF4F5F"
                    width="28"
                    height="28"
                    viewBox="0 0 20 20"
                    aria-labelledby="icon-svg-title- icon-svg-desc-"
                    role="img"
                    class="sc-rbbb40-0 fNHveS"
                  >
                    <title>chevron-right</title>
                    <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                  </svg>
                </button>
              </div>
              <div className="A-box2-inner">
                <button className="A-box2-inbox">
                  <p>Zomato Consolidated</p>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#EF4F5F"
                    width="28"
                    height="28"
                    viewBox="0 0 20 20"
                    aria-labelledby="icon-svg-title- icon-svg-desc-"
                    role="img"
                    class="sc-rbbb40-0 fNHveS"
                  >
                    <title>chevron-right</title>
                    <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="A-box3">
              <div className="A-box2-inner">
                <button className="A-box2-inbox">
                  <p>Zomato Standalone</p>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#EF4F5F"
                    width="28"
                    height="28"
                    viewBox="0 0 20 20"
                    aria-labelledby="icon-svg-title- icon-svg-desc-"
                    role="img"
                    class="sc-rbbb40-0 fNHveS"
                  >
                    <title>chevron-right</title>
                    <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                  </svg>
                </button>
              </div>
              <div className="A-box2-inner">
                <button className="A-box2-inbox">
                  <p>Zomato Standalone</p>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#EF4F5F"
                    width="28"
                    height="28"
                    viewBox="0 0 20 20"
                    aria-labelledby="icon-svg-title- icon-svg-desc-"
                    role="img"
                    class="sc-rbbb40-0 fNHveS"
                  >
                    <title>chevron-right</title>
                    <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                  </svg>
                </button>
              </div>
              <div className="A-box2-inner">
                <button className="A-box2-inbox">
                  <p>Zomato Standalone</p>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#EF4F5F"
                    width="28"
                    height="28"
                    viewBox="0 0 20 20"
                    aria-labelledby="icon-svg-title- icon-svg-desc-"
                    role="img"
                    class="sc-rbbb40-0 fNHveS"
                  >
                    <title>chevron-right</title>
                    <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="A-box4">
              <div className="A-box2-inner">
                <button className="A-box2-inbox">
                  <p>Zomato Subsidiary</p>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#EF4F5F"
                    width="28"
                    height="28"
                    viewBox="0 0 20 20"
                    aria-labelledby="icon-svg-title- icon-svg-desc-"
                    role="img"
                    class="sc-rbbb40-0 fNHveS"
                  >
                    <title>chevron-right</title>
                    <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                  </svg>
                </button>
              </div>
              <div className="A-box2-inner">
                <button className="A-box2-inbox">
                  <p>Zomato Subsidiary</p>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#EF4F5F"
                    width="28"
                    height="28"
                    viewBox="0 0 20 20"
                    aria-labelledby="icon-svg-title- icon-svg-desc-"
                    role="img"
                    class="sc-rbbb40-0 fNHveS"
                  >
                    <title>chevron-right</title>
                    <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                  </svg>
                </button>
              </div>
              <div className="A-box2-inner">
                <button className="A-box2-inbox">
                  <p>Zomato Subsidiary</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#EF4F5F"
                    width="28"
                    height="28"
                    viewBox="0 0 20 20"
                    aria-labelledby="icon-svg-title- icon-svg-desc-"
                    role="img"
                    class="sc-rbbb40-0 fNHveS"
                  >
                    <title>chevron-right</title>
                    <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <button className="A-zoombox" onClick={check}>
            <div className="A-zoombox-p">
              <p>Subsidiaries Financials</p>
              {svgon && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width="23"
                  height="23"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="sc-rbbb40-0 iRDDBk"
                >
                  <title>chevron-down</title>
                  <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
                </svg>
              )}
              {!svgon && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="archivers-up"
                >
                  <title>chevron-down</title>
                  <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
                </svg>
              )}
            </div>
            {!svgon && (
              <div>
                <div className="A-zoombox-line"></div>
                <div className="A-zoombox-details">
                  <div className="A-zoombox-detail1">
                    {det1.map((det, index) => (
                      <div className="A-zoombox-detail1-boxes">
                        <div key={index} className="A-zoombox-detail1-conts">
                          {det}
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#EF4F5F"
                          width="28"
                          height="28"
                          viewBox="0 0 20 20"
                          aria-labelledby="icon-svg-title- icon-svg-desc-"
                          role="img"
                          class="sc-rbbb40-0 fNHveS"
                        >
                          <title>chevron-right</title>
                          <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                        </svg>
                      </div>
                    ))}
                  </div>
                  <div className="A-zoombox-detail2">
                    {det2.map((det, index) => (
                      <div className="A-zoombox-detail1-boxes">
                        <div key={index} className="A-zoombox-detail1-conts">
                          {det}
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#EF4F5F"
                          width="28"
                          height="28"
                          viewBox="0 0 20 20"
                          aria-labelledby="icon-svg-title- icon-svg-desc-"
                          role="img"
                        >
                          <title>chevron-right</title>
                          <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                        </svg>
                      </div>
                    ))}
                  </div>
                  <div className="A-zoombox-detail1"></div>
                </div>
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
function leftArsvg() {
  return <></>;
}
export default Archives;

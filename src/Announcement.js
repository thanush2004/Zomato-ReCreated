import "./fourth.css";
import { React, useState, useEffect } from "react";
import InvAbout from "./InvAbout";
import InvBlack from "./InvBlack";
function Announcement() {
  const [Anbtn1, setAnbtn1] = useState(false);
  const [Anbtn2, setAnbtn2] = useState(false);
  const [content, setContent] = useState("All");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");
  const [disp, setDisp] = useState("All");
  const [btnch, setbtch] = useState(false);
  const [btnch2, setbtch2] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    const filteredResults = [];
    Dates.forEach((date, index) => {
      if (
        date.toLowerCase().includes(value) ||
        Details[index].toLowerCase().includes(value)
      ) {
        if (
          !filteredResults.some(
            (result) => result.date === date && result.detail === Details[index]
          )
        ) {
          filteredResults.push({ date, detail: Details[index] });
        }
      }
    });
    setResults(filteredResults);
  };
  function clicked(value) {
    if (value == 1) {
      if (Anbtn1) setAnbtn1(false);
      else setAnbtn1(true);
      setAnbtn2(false);
    } else {
      if (Anbtn2) setAnbtn2(false);
      else setAnbtn2(true);
      setAnbtn1(false);
    }
  }
  function choosed(cont) {
    setContent(cont);
  }
  function handleReset() {
    setbtch(false);
    setbtch2(false);
    setDisp("All");
    const fiscalYearInputs = document.getElementsByName("fiscalYear");
    const quarterInputs = document.getElementsByName("quarter");

    fiscalYearInputs.forEach((input) => (input.checked = false));
    quarterInputs.forEach((input) => (input.checked = false));
  }

  function display() {
    setDisp(content2 + " " + content3);
  }

  useEffect(() => {
    const allData = Dates.map((date, index) => ({
      date,
      detail: Details[index],
    }));
    setResults(allData);
  }, []);
  const Dates = [
    "20 January, 2025",
    "15 January, 2025",
    "22 October, 2024",
    "17 October, 2024",
    "21 August, 2024",
    "1 August, 2024",
    "1 August, 2024",
    "25 July, 2024",
    "13 May, 2024",
    "13 May, 2024",
    "7 May, 2024",
    "8 February, 2024",
    "1 February, 2024",
    "3 November, 2023",
    "26 October, 2023",
    "3 August, 2023",
    "3 August, 2023",
    "19 May, 2023",
    "19 May, 2023",
    "10 May, 2023",
    "11 February, 2023",
    "9 February, 2023",
    "1 February, 2023",
    "2 November, 2022",
    "22 July, 2022",
    "21 June, 2022",
    "14 May, 2022",
    "2 February, 2022",
    "2 August, 2021",
  ];

  const Details = [
    "Zomato - Outcome of meeting of Board of Directors dated January 20, 2025",
    "Zomato - Intimation of Board Meeting and earnings conference call for Q3FY25 Results",
    "Zomato - Outcome of meeting of Board of Directors dated October 22, 2024",
    "Zomato - Intimation of Board Meeting and earnings conference call for Q2FY25 Results",
    "Zomato - Outcome of the Board Meeting for acquisition of Wasteland Entertainment Private Limited and Orbgen Technologies Private Limited",
    "Zomato - Outcome of meeting of Board of Directors dated August 1, 2024",
    "Zomato - Shareholders letter dated August 1, 2024",
    "Zomato - Intimation of Board Meeting for Q1FY25 Results",
    "Zomato - Outcome of meeting of Board of Directors dated May 13, 2024",
    "Zomato - Audio recording link of Earnings call dated May 13, 2024",
    "Zomato announces Board meeting date and schedule of earnings conference call for Q4FY24",
    "Zomato - Outcome of meeting of board of directors dated February 8, 2024",
    "Zomato announces Board meeting date and schedule of earnings conference call for Q3FY24",
    "Zomato - Outcome of meeting of Board of Directors dated November 3, 2023 and disclosure regarding sale of ZMT Europe LDA, Associate",
    "Zomato announces Board meeting date and schedule of earnings conference call for Q2FY24",
    "Zomato - Outcome of meeting of Board of Directors dated August 3, 2023",
    "Zomato - Shareholders letter dated August 3, 2023",
    "Zomato - Outcome of meeting of Board of Directors dated May 19, 2023",
    "Zomato - Shareholders letter dated May 19, 2023",
    "Zomato announces Board meeting date and schedule of earnings conference call for Q4 FY23",
    "Zomato - Extract of Newspaper publication of Financial results",
    "Zomato - Outcome of meeting of Board of Directors dated February 9, 2023",
    "Zomato announces the Board meeting date for approving Q3 FY23 results",
    "Zomato announces the Board meeting date for approving Q2 FY23 results",
    "Zomato - Intimation of Board Meeting for Q2 FY22 Results",
    "Zomato - Intimation of Board Meeting for Blinkit Acquisition",
    "Zomato - Intimation of Board Meeting for Q4 FY22 Results",
    "Zomato - Intimation of Board Meeting for Q3 FY22 Results",
    "Zomato - Intimation of Board Meeting for Q1 FY22 Results",
  ];

  return (
    <>
      <InvBlack />
      <div className="Announcement-invblack">
        <div className="Announcement-body">
          <div className="Announcement-layers">
            <div className="Announcement-layer1">Corporate Announcements</div>
            <div className="Announcement-layer1-boxes">
              <div className="Announcement-layer1-boxes-box1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#EF4F5F"
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="sc-rbbb40-0 iRDDBk"
                >
                  <title>search-thick</title>
                  <path d="M19.24 17.9l-3.5-3.52c1.145-1.445 1.836-3.294 1.836-5.304 0-4.739-3.841-8.58-8.58-8.58s-8.58 3.841-8.58 8.58c0 4.739 3.841 8.58 8.58 8.58 2.055 0 3.942-0.723 5.419-1.928l-0.016 0.012 3.5 3.5c0.173 0.169 0.409 0.272 0.67 0.272s0.497-0.104 0.67-0.273l-0 0c0.169-0.173 0.272-0.409 0.272-0.67s-0.104-0.497-0.273-0.67l0 0zM2.38 9.040c0.011-3.67 2.989-6.64 6.66-6.64 3.678 0 6.66 2.982 6.66 6.66s-2.982 6.66-6.66 6.66v0c0 0-0 0-0 0-3.678 0-6.66-2.982-6.66-6.66 0-0.007 0-0.014 0-0.021v0.001z"></path>
                </svg>
                <input
                  placeholder="Search announcements"
                  type="text"
                  value={searchText}
                  onChange={handleSearch}
                ></input>
              </div>

              <div className="Announcement-layer1-boxes2">
                <div className="Announcement-layout1">
                  <button
                    className={`Announcement-layer1-boxes2-1 ${
                      Anbtn1 ? "Announcement-box-clicked" : ""
                    }`}
                    onClick={() => clicked(1)}
                  >
                    <p>{content}</p>
                    {!Anbtn1 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#B5B5B5"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        aria-labelledby="icon-svg-title- icon-svg-desc-"
                        role="img"
                        class="sc-rbbb40-0 kyPUnV"
                      >
                        <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
                      </svg>
                    )}

                    {Anbtn1 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#B5B5B5"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        aria-labelledby="icon-svg-title- icon-svg-desc-"
                        role="img"
                        class="btn-clicked"
                      >
                        <title>chevron-down</title>
                        <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
                      </svg>
                    )}
                  </button>
                  {Anbtn1 && (
                    <div className="Announcement-layer1-boxes2-2">
                      <button
                        className="Announcement-layer1-boxes2-2-conts"
                        onClick={() => {
                          choosed("All");
                          clicked(1);
                        }}
                      >
                        All
                      </button>
                      <button
                        className="Announcement-layer1-boxes2-2-conts"
                        onClick={() => {
                          choosed(" Board meeting");
                          clicked(1);
                        }}
                      >
                        Board meeting
                      </button>
                      <button
                        className="Announcement-layer1-boxes2-2-conts"
                        onClick={() => {
                          choosed("Investments");
                          clicked(1);
                        }}
                      >
                        Investments
                      </button>
                      <button
                        className="Announcement-layer1-boxes2-2-conts"
                        onClick={() => {
                          choosed("Shareholders' Meeting");
                          clicked(1);
                        }}
                      >
                        Shareholders' Meeting
                      </button>
                      <button
                        className="Announcement-layer1-boxes2-2-conts"
                        onClick={() => {
                          choosed("Shareholders' awareness");
                          clicked(1);
                        }}
                      >
                        Shareholders' awareness
                      </button>
                      <button
                        className="Announcement-layer1-boxes2-2-conts"
                        onClick={() => {
                          choosed("Other Corporate filings");
                          clicked(1);
                        }}
                      >
                        Other Corporate filings
                      </button>
                    </div>
                  )}
                </div>
                <div className="Announcement-layout2">
                  <button
                    className={`Announcement-layer2-box1 ${
                      Anbtn2 ? "Announcement-box-clicked" : ""
                    }`}
                    onClick={() => {
                      clicked(2);
                    }}
                  >
                    <p>Filing Period:</p>
                    <p className="Announcement-layer2-box1-p2">{disp}</p>
                    {!Anbtn2 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#B5B5B5"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        aria-labelledby="icon-svg-title- icon-svg-desc-"
                        role="img"
                      >
                        <title>chevron-down</title>
                        <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
                      </svg>
                    )}
                    {Anbtn2 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#B5B5B5"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        aria-labelledby="icon-svg-title- icon-svg-desc-"
                        role="img"
                        class="btn-clicked"
                      >
                        <title>chevron-down</title>
                        <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
                      </svg>
                    )}
                  </button>
                  {Anbtn2 && (
                    <div className="Announcement-layer2-box2">
                      <div className="Announcement-layer2-box2-l1">
                        <div className="Announcement-layer2-box2-l1-1">
                          <form>
                            <label className="Announcement-layer2-box2-l2-topics">
                              FY 2025
                              <input
                                className="Announcement-layer2-box2-l2-topics-sol"
                                type="radio"
                                name="fiscalYear"
                                onClick={() => {
                                  setbtch(true);
                                  setContent2("FY 2025");
                                }}
                                required
                              ></input>
                            </label>
                            <label className="Announcement-layer2-box2-l2-topics">
                              FY 2024
                              <input
                                className="Announcement-layer2-box2-l2-topics-sol"
                                type="radio"
                                name="fiscalYear"
                                onClick={() => {
                                  setbtch(true);
                                  setContent2("FY 2024");
                                }}
                                required
                              ></input>
                            </label>
                            <label className="Announcement-layer2-box2-l2-topics">
                              FY 2023
                              <input
                                className="Announcement-layer2-box2-l2-topics-sol"
                                type="radio"
                                onClick={() => {
                                  setbtch(true);
                                  setContent2("FY 2023");
                                }}
                                name="fiscalYear"
                                required
                              ></input>
                            </label>
                            <label className="Announcement-layer2-box2-l2-topics">
                              FY 2022
                              <input
                                className="Announcement-layer2-box2-l2-topics-sol"
                                type="radio"
                                name="fiscalYear"
                                onClick={() => {
                                  setbtch(true);
                                  setContent2("FY 2022");
                                }}
                                required
                              ></input>
                            </label>
                          </form>
                        </div>
                        <div className="Announcement-layer2-box2-l1-2">
                          <form>
                            <label className="Announcement-layer2-box2-l2-topics">
                              Q1
                              <input
                                className="Announcement-layer2-box2-l2-topics-sol2"
                                type="radio"
                                name="quarter"
                                onClick={() => {
                                  setbtch2(true);
                                  setContent3("Q1");
                                }}
                                required
                              ></input>
                            </label>
                            <label className="Announcement-layer2-box2-l2-topics">
                              Q2
                              <input
                                className="Announcement-layer2-box2-l2-topics-sol2"
                                type="radio"
                                name="quarter"
                                onClick={() => {
                                  setbtch2(true);
                                  setContent3("Q2");
                                }}
                                required
                              ></input>
                            </label>
                            <label className="Announcement-layer2-box2-l2-topics">
                              Q3
                              <input
                                className="Announcement-layer2-box2-l2-topics-sol2"
                                type="radio"
                                name="quarter"
                                onClick={() => {
                                  setbtch2(true);
                                  setContent3("Q3");
                                }}
                                required
                              ></input>
                            </label>
                            <label className="Announcement-layer2-box2-l2-topics">
                              Q4
                              <input
                                className="Announcement-layer2-box2-l2-topics-sol2"
                                type="radio"
                                name="quarter"
                                onClick={() => {
                                  setbtch2(true);
                                  setContent3("Q4");
                                }}
                                required
                              ></input>
                            </label>
                          </form>
                        </div>
                        <div className="Announcement-layer2-box2-l2"></div>
                      </div>
                      <div className="Announcement-layer2-buttons">
                        <button
                          className="Announcement-layer2-box2-btn1"
                          onClick={handleReset}
                        >
                          Reset
                        </button>
                        <button
                          className={`Announcement-layer2-box2-btn2 ${
                            btnch && btnch2 ? "done-btn" : ""
                          }`}
                          onClick={display}
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="Announcement-line"></div>

            <div className="Announcement-datas">
              {results.map((result, index) => (
                <div key={index}>
                  <p className="Announcement-datas-p1">{result.date}</p>
                  <p className="Announcement-datas-p2">{result.detail}</p>
                  <div className="Announcement-datas-last">
                    <p className="Announcement-datas-p3">Read More</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#EF4F5F"
                      width="12"
                      height="12"
                      viewBox="0 0 20 20"
                      aria-labelledby="icon-svg-title- icon-svg-desc-"
                      role="img"
                      class="sc-rbbb40-0 ezrcri"
                    >
                      <path d="M5 0.42l10 10-10 10v-20z"></path>
                    </svg>
                  </div>
                  <div className="Announcement-datas-line"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <InvAbout />
      </div>
    </>
  );
}
export default Announcement;

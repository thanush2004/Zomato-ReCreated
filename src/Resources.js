import InvBlack from "./InvBlack";
import { useState } from "react";
import "./fourth.css";
import InvAbout from "./InvAbout";
function Resources() {
  const [btnclicked, setBtnClicked] = useState(false);
  function HandleClick() {
    btnclicked ? setBtnClicked(false) : setBtnClicked(true);
  }
  const handleMailClick = () => {
    window.location.href = "mailto:";
  };
  const fd = [
    ["Details of business"],
    ["Terms and conditions of appointment of independent directors"],
    ["Composition of various committees of board of directors"],
    ["Code of conduct of board of directors and senior management personnel"],
    ["Details of establishment of vigil mechanism/ Whistle Blower policy"],
    [
      "Criteria of making payments to non-executive directors, if the same is not disclosed in Annual report",
    ],
    ["Policy on dealing with related party transactions"],
    ["Policy for determining 'material' subsidiaries"],
    [
      "Details of familiarization programmes imparted to independent directors including the following details:-",
      "Number of programmes attended by independent directors (during the year and on a cumulative basis till date)",
      "Number of hours spent by independent directors in such programmes (during the year and on cumulative basis till date), and",
      "Other relevant details",
    ],
    ["The email address for grievance redressal and other relevant details"],
    [
      "Contact information of the designated officials of the listed entity who are responsible for assisting and handling investor grievances",
    ],
    [
      "Financial information including:",
      "Notice of meeting of the board of directors where financial results shall be discussed",
    ],

    [
      "Financial Information including:",
      "Financial results, on conclusion of the meeting of the board of directors where the financial results were approved",
      "Complete copy of the annual report including balance sheet, profit and loss account, directors report, corporate governance report etc.",
    ],
    ["Shareholding pattern"],
    [
      "Details of agreements entered into the media companies and/or their associates, etc.",
    ],
    [
      "Schedule of analysts or institutional investors meet and presentations made by the listed entity to analysts or institutional investors",
    ],
    [
      "Audio or video recordings and transcripts of post earnings/quarterly calls",
    ],
    [
      "New name and the old name of the listed entity for a continuous period of one year, from the date of the last name change",
    ],
    [
      "Items published in the newspaper:",
      "financial results, as specified in regulation 33, along-with the modified opinion(s) or reservation(s), if any, expressed by the auditor:",
      "notices given to shareholders by advertisement.",
    ],
    [
      "All credit ratings obtained by the entity for all its outstanding instruments, updated immediately as and when there is any revision in any of the ratings",
    ],
    [
      "Separate audited financial statements of each subsidiary of the listed entity in respect of a relevant financial year, uploaded at least 21 days prior to the date of the annual general meeting which has been called to inter alia consider accounts of that financial year",
    ],
    ["Secretarial compliance report"],
    [
      "Disclosure of the policy for determination of materiality of events or information",
    ],
    [
      "Disclosure of contact details of key managerial personnel who are authorized for the purpose of determining materiality of an event or information and for the purpose of making disclosures to stock exchange(s)",
    ],
    [
      "All such events or information which have been disclosed to stock exchange(s) under regulation 30 of LODR",
    ],
  ];

  const serial = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    false,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
  ];
  return (
    <>
      <InvBlack />
      <div className="Res-body">
        <div className="Res-conts">
          <div className="Res-topic">Resources</div>
          <div className="Res-line"></div>
          <div className="Res-contact-boxes">
            <div className="Res-contact-topic">Contact Us</div>
            <div className="Res-contact-subtopics">
              <div className="Res-contact-box1">
                <div className="Res-contact-sub1">
                  For Investor Queries and Grievance Redressal
                </div>
                <p>Sandhya Sethia</p>
                <h1>
                  Company Secretary and Compliance Officer
                  <br />
                  Zomato Limited
                </h1>
                <h2>
                  Ground Floor, 12A <br />
                  94 Meghdoot, Nehru Place <br />
                  New Delhi - 110019
                </h2>
                <h1>Phone</h1>
                <h4>+91 124 426 8565, +91 11 40592373</h4>
                <h1>Email</h1>
                <h3>companysecretary@zomato.com</h3>
              </div>
              <div className="Res-contact-box1">
                <div className="Res-contact-sub1">
                  Authorized person to determine materiality of events or
                  information
                </div>
                <p>Akshant Goyal</p>
                <h1>
                  Chief Financial Officer
                  <br />
                  Zomato Limited
                </h1>
                <h2>
                  Ground Floor, 12A <br />
                  94 Meghdoot, Nehru Place <br />
                  New Delhi - 110019
                </h2>
                <h1>Phone</h1>
                <h4>+91 124 426 8565, +91 11 40592373</h4>
                <h1>Email</h1>
                <h3>cfo@zomato.com</h3>
              </div>
            </div>
            <div className="Res-contact-subtopics">
              <div className="Res-contact-box1">
                <p>
                  MUFG Intime India Private Limited (Formerly known as Link
                  Intime India Private Limited)
                </p>
                <h1>Registrar and Share Transfer Agent</h1>
                <h2>
                  Noble Heights, 1st Floor <br /> Plot NH 2, C-1 Block LSC
                  <br />
                  Near Savitri Market, Janakpuri
                  <br /> New Delhi - 110058
                </h2>

                <h1>Phone</h1>
                <h4>+91 11 40592373</h4>
                <h1>Email</h1>
                <h3>delhi@linkintime.co.in</h3>
                <h1>Website</h1>
                <h3>www.linkintime.co.in</h3>
                <h1>Contact Person</h1>
                <h4>Mr. Vishal Dixit</h4>
              </div>
              <div className="Res-contact-box1">
                <p>Zomato Limited</p>
                <h1>CIN: L93030DL2010PLC198141</h1>

                <h1>Phone</h1>
                <h4>+91 11 49411000</h4>
                <h1>Investor Grievance Email</h1>
                <h2>
                  Ground Floor, 12A <br />
                  94 Meghdoot, Nehru Place <br />
                  New Delhi - 110019
                </h2>
                <h1>Phone</h1>
                <h4>+91 124 426 8565, +91 11 40592373</h4>
                <h1>Email</h1>
                <h3>info@zomato.com</h3>
              </div>
            </div>
            <div className="Res-scores">
              <div className="Res-box1">
                <h1>SEBI SCORES Portal</h1>
                <a>Link to SEBI SCORES Portal</a>
                <a>Process Flow of Complaint Redressal Mechanism</a>
                <p>Communication to holders of shares in physical form</p>
              </div>
              <div className="Res-box2">
                <div>Have questions?</div>
                <h6>
                  Reach out to us by emailing at
                  <a className="Res-box1-a"> companysecretary@zomato.com</a>,
                  and we’ll get back to you.
                </h6>
                <button onClick={handleMailClick}>Contact Us</button>
              </div>
            </div>
            <button className="Res-foot-box" onClick={HandleClick}>
              <div className="Res-foot-cont">
                <p> Disclosures under Regulation 46 of the LODR</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width="23"
                  height="23"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className={btnclicked ? "rotate-svg" : "default-svg"}
                >
                  <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
                </svg>
              </div>
              {btnclicked && (
                <div className="Res-foot-contents">
                  <div className="Res-foot-line"></div>
                  <ul>
                    {fd.map((det, index) => (
                      <li key={index} className="Res-foot-li">
                        {Array.isArray(det) ? (
                          det.map((subDet, subIndex) => (
                            <div key={subIndex}>
                              {subIndex === 0 ? (
                                serial[index] ? (
                                  <a href="#">
                                    <span className="no-point">
                                      {index + 1}.{" "}
                                    </span>
                                    {subDet}
                                  </a>
                                ) : (
                                  <p>
                                    <span className="no-point">
                                      {index + 1}.{" "}
                                    </span>
                                    {subDet}
                                  </p>
                                )
                              ) : (
                                <span className="Res-li-point">{subDet}</span>
                              )}
                            </div>
                          ))
                        ) : (
                          <div>
                            {serial[index] ? (
                              <a href="#">
                                <span className="no-point">{index + 1}. </span>
                                {det}
                              </a>
                            ) : (
                              <p>
                                <span className="no-point">{index + 1}. </span>
                                {det}
                              </p>
                            )}
                          </div>
                        )}
                        <div className="Res-foot-div-line"></div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </button>
          </div>
          <div className="Res-foot-about">
            <InvAbout />
          </div>
        </div>
      </div>
    </>
  );
}
export default Resources;

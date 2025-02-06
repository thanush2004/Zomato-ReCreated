import { React, useState, useEffect } from "react";
import "./third.css";
import Wlogo from "./assets/Whiterestzom.webp";
import AAdres_black_zom from "./assets/addres_black_zom.webp";
import Addresimg1 from "./assets/AddResimg1.avif";
import Addresimg2 from "./assets/AddResimg2.avif";
import Addresimg3 from "./assets/AddResimg3.avif";
import person1 from "./assets/person1.webp";
import person2 from "./assets/person2.webp";
import person3 from "./assets/person3.webp";
import phoneicon from "./assets/phoneicon.png";
import mailicon from "./assets/mailicon.png";
import addstore1 from "./assets/apple_black_store.webp";
import addstore2 from "./assets/googleplay_black_store.webp";
import AddResWhite from "./AddResWhite";
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  rel="stylesheet"
/>;

function Add_ab() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);

  const [isScrolled2, setIsScrolled2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled2(true);
      } else {
        setIsScrolled2(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="body-class">
        <div className="addreslayer1">
          {!isScrolled2 ? (
            <div className="addreslayer1nav">
              <img src={Wlogo} className="arlogo"></img>
              <div className="addresnav2">
                <div className="arhelpline">
                  Need help? Call +91 97-38-38-38-38
                </div>
                <div className="arloginbox">Login</div>
              </div>
            </div>
          ) : (
            <AddResWhite />
          )}

          <div className="addreslayer2">
            Partner with Zomato and grow your business
          </div>
          <div className="addreslayer3">
            0% commission for the 1st month for new restaurant partners in
            selected cities
          </div>
          <div className="addreslayer4">Register your restaurant</div>
          <div className="addreslayer5">
            <div className="addreslayer5side1">
              <div className="addreslayer511">
                Get Started - It only takes 10 minutes
              </div>
              <div className="addreslayer512">
                Please be ready with the following for a smooth registration
              </div>
              <div className="addreslayer513navs">
                <div className="addreslayer513navsa">
                  <div className="addreslayer513navsconts1">
                    <div class="checkmark-container">
                      <span class="checkmark"></span>
                    </div>
                    <div className="addreslayer513navsb">PAN card</div>
                  </div>
                  <div className="addreslayer513navsconts2">
                    <div className="addreslayer513navsconts21">
                      <div class="checkmark-container">
                        <span class="checkmark"></span>
                      </div>
                      <div className="addreslayer513navsb">
                        GST number, if applicable
                      </div>
                    </div>
                    <div className="addreslayer513navsconts22">
                      <div className="addreslayerinnercontent">
                        Require a GST?&nbsp;
                      </div>
                      <div className="addreslayerinnercontent2">
                        {" "}
                        Apply here
                      </div>
                    </div>
                  </div>
                  <div className="addreslayer513navsconts3">
                    <div class="checkmark-container">
                      <span class="checkmark"></span>
                    </div>
                    <div className="addreslayer513navsb">
                      Bank account details
                    </div>
                  </div>
                </div>
                <div className="addreslayer513navsa">
                  <div className="addreslayer513navsconts1">
                    <div class="checkmark-container">
                      <span class="checkmark"></span>
                    </div>
                    <div className="addreslayer513navsb">
                      Menu details and one dish image
                    </div>
                  </div>
                  <div className="addreslayer513navsconts2">
                    <div className="addreslayer513navsconts21">
                      <div class="checkmark-container">
                        <span class="checkmark"></span>
                      </div>
                      <div className="addreslayer513navsb">FSSAI license</div>
                    </div>
                    <div className="addreslayer513navsconts22">
                      <div className="addreslayerinnercontent">
                        Don't have a FSSAI license?&nbsp;
                      </div>
                      <div className="addreslayerinnercontent2">Apply here</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="addreslayer5side2">
              <video width="356" height="200" controls>
                <source src="myVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="addres-second-layer">
        <div className="addres-second-layer-level1"></div>
        <div className="addres-second-layer-level2">
          Why should you partner with Zomato?
        </div>
        <div className="addres-second-layer-boxes">
          <div className="addres-second-layer-boxes-box1">
            <img
              className="addres-second-layer-boxes-box1-img"
              src={Addresimg1}
            ></img>
            <div className="addres-second-layer-boxes-box1-cont1">
              Attract new customers
            </div>
            <div className="addres-second-layer-boxes-box1-cont2">
              Reach the millions of people ordering on Zomato
            </div>
          </div>
          <div className="addres-second-layer-boxes-box2">
            <img
              className="addres-second-layer-boxes-box1-img"
              src={Addresimg2}
            ></img>
            <div className="addres-second-layer-boxes-box2-cont1">
              Doorstep delivery convenience
            </div>
            <div className="addres-second-layer-boxes-box2-cont2">
              Easily get your orders delivered through our trained delivery
              partners
            </div>
          </div>
          <div className="addres-second-layer-boxes-box3">
            <img
              className="addres-second-layer-boxes-box1-img"
              src={Addresimg3}
            ></img>
            <div className="addres-second-layer-boxes-box3-cont1">
              Hotline support
            </div>
            <div className="addres-second-layer-boxes-box3-cont2">
              On-call support for any issues or growth consultations
            </div>
          </div>
        </div>
      </div>
      <div className="addres-third-layer">
        <div className="addtes-third-layer-levels">
          <div className="addres-third-layer-lev1">
            Restaurant success stories
          </div>

          <div className="addres-third-layer-layouts">
            <button className="addres-third-layer-button1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="larrow"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>
            <div className="addres-third-layer-lay1">
              <div className="addres-third-layer-lay1-lev1">
                Zomato enabled me to restart my operations post-COVID when I had
                no hope of doing my business again. I'm grateful to the platform
                for helping me thrive - my online ordering business has done so
                well, it has even taken over my dining business!
              </div>
              <div className="addres-third-layer-lay1-lev4"> </div>
              <div className="addres-third-layer-lay1-lev2">
                <img
                  className="addres-third-layer-lay1-lev2-img"
                  src={person1}
                />
                <div className="addres-third-layer-lay1-lev2-details">
                  <div className="addres-third-layer-lay1-lev2-details-a">
                    Arshad Khan
                  </div>
                  <div className="addres-third-layer-lay1-lev2-details-b">
                    Owner - Khushboo biryani,
                  </div>
                  <div className="addres-third-layer-lay1-lev2-details-b">
                    Shillong
                  </div>
                </div>
              </div>
            </div>
            <div className="addres-third-layer-lay2">
              <div className="addres-third-layer-lay1-lev1">
                Thanks to Zomato's invaluable support, our startup cloud kitchen
                has been doing wonders in the competitive food industry
                landscape. Their dedication to promoting local businesses and
                powerful reporting tools have been instrumental in our success,
                and we look forward to a long-term partnership.
              </div>
              <div className="addres-third-layer-lay1-lev4a"> </div>
              <div className="addres-third-layer-lay1-lev2">
                <img
                  className="addres-third-layer-lay1-lev2-img"
                  src={person2}
                />
                <div className="addres-third-layer-lay1-lev2-details">
                  <div className="addres-third-layer-lay1-lev2-details-a">
                    Vijay
                  </div>
                  <div className="addres-third-layer-lay1-lev2-details-b">
                    Owner - Birgo,
                  </div>
                  <div className="addres-third-layer-lay1-lev2-details-b">
                    Coimbatore
                  </div>
                </div>
              </div>
            </div>
            <div className="addres-third-layer-lay3">
              <div className="addres-third-layer-lay1-lev3">
                Zomato helped us grow by 60% since registration, and now, we are
                one of the biggest vegetarian joints in Ernakulam city.
              </div>
              <div className="addres-third-layer-lay1-lev4"> </div>
              <div className="addres-third-layer-lay1-lev2">
                <img
                  className="addres-third-layer-lay1-lev2-img"
                  src={person3}
                />
                <div className="addres-third-layer-lay1-lev2-details">
                  <div className="addres-third-layer-lay1-lev2-details-a">
                    Sandeep K Mohan
                  </div>
                  <div className="addres-third-layer-lay1-lev2-details-b">
                    Owner - Mysore Raman Idli,
                  </div>
                  <div className="addres-third-layer-lay1-lev2-details-b">
                    Kerala
                  </div>
                </div>
              </div>
            </div>
            <button className="addres-third-layer-button1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="larrow"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="addres-fourth-layer">
        <div className="address-fourth-contents">
          <div className="address-fourth-lev1">Frequently asked questions</div>
          <div className="address-fourth-lav2">
            <button className="address-fourth-lavbox">
              <div
                className="addres-fourth-lavbox-q"
                onClick={() => {
                  setIsVisible1((prevState) => !prevState);
                }}
              >
                <div className="address-fourth-lav2-ques">
                  What are the documents and details required to start
                  deliveries through Zomato?
                </div>
                <div className="address-fourth-uarrow">
                  {isVisible1 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="address-fourth-uarrow"
                    >
                      <path d="M18 14L12 8L6 14"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="address-fourth-uarrow"
                    >
                      <path d="M6 10L12 16L18 10"></path>
                    </svg>
                  )}
                </div>
              </div>
              {isVisible1 && (
                <div className="addres-fourth-lavbox-a">
                  <div className="addres-fourth-lavbox-a1">
                    To ensure a smooth onboarding experience, please have the
                    following documents ready:
                  </div>
                  <div className="addres-fourth-lavbox-a2">
                    Mandatory documents:
                  </div>
                  <ul className="addres-fourth-lavbox-a3">
                    <li>
                      <p className="addres-fourth-lavbox-a3li">PAN card</p>
                      <span>: Only adult PAN cards are accepted.</span>
                    </li>
                    <li>
                      <p className="addres-fourth-lavbox-a3li">
                        FSSAI license certificate
                      </p>
                      <span>
                        :&nbsp;
                        <a href="https://www.zomato.com/restaurant-services-hub/fssai/">
                          Apply now
                        </a>
                      </span>
                    </li>
                    <li>
                      <p className="addres-fourth-lavbox-a3li">Bank details</p>
                      <span>: A copy of your cheque or passbook.</span>
                    </li>
                    <li>
                      <p className="addres-fourth-lavbox-a3li">
                        Restaurant’s delivery menu
                      </p>
                    </li>
                    <li>
                      <p className="addres-fourth-lavbox-a3li">
                        One food image
                      </p>
                      <span>
                        : Used as your restaurant’s cover image on Zomato.
                      </span>
                    </li>
                    <div className="addres-fourth-lavbox-a22">
                      Optional documents
                    </div>
                    <ul className="addres-fourth-lavbox-a3">
                      <li>
                        <p className="addres-fourth-lavbox-a3li">
                          GST certificate
                        </p>
                        <span>
                          : If applicable based on the PAN provided&nbsp;
                          <a href="https://www.zomato.com/restaurant-services-hub/fssai/">
                            Apply now
                          </a>
                        </span>
                      </li>
                    </ul>
                  </ul>
                </div>
              )}
            </button>
            <button className="address-fourth-lavbox">
              <div
                className="addres-fourth-lavbox-q"
                onClick={() => {
                  setIsVisible2((prevState) => !prevState);
                }}
              >
                <div className="address-fourth-lav2-ques">
                  How long will it take for a restaurant to go live on Zomato
                  after submitting the documents?
                </div>
                <div className="address-fourth-uarrow">
                  {isVisible2 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="address-fourth-uarrow"
                    >
                      <path d="M18 14L12 8L6 14"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="address-fourth-uarrow"
                    >
                      <path d="M6 10L12 16L18 10"></path>
                    </svg>
                  )}
                </div>
              </div>
              {isVisible2 && (
                <div className="addres-fourth-lavbox-a">
                  <div className="addres-fourth-lavbox-a1">
                    Once all mandatory documents are uploaded and the contract
                    is accepted, our team typically takes around 24 hours to
                    verify the documents and build menu.
                  </div>
                  <div className="addres-fourth-lavbox-a2"></div>
                  <ul className="addres-fourth-lavbox-a3">
                    <li>
                      <p className="addres-fourth-lavbox-a3li"></p>
                      <span>
                        If all documents are correct, your restaurant will be
                        ready to accept orders within 24 hours.
                      </span>
                    </li>
                    <li>
                      <p className="addres-fourth-lavbox-a3li"></p>
                      <span>
                        If any document is rejected, the go-live process will be
                        delayed until you resubmit the correct documents.
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </button>
            <button className="address-fourth-lavbox">
              <div
                className="addres-fourth-lavbox-q"
                onClick={() => {
                  setIsVisible3((prevState) => !prevState);
                }}
              >
                <div className="address-fourth-lav2-ques">
                  What is the one-time onboarding fee? Do I have to pay it at
                  the time of registration?
                </div>
                <div className="address-fourth-uarrow">
                  {isVisible3 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="address-fourth-uarrow"
                    >
                      <path d="M18 14L12 8L6 14"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="address-fourth-uarrow"
                    >
                      <path d="M6 10L12 16L18 10"></path>
                    </svg>
                  )}
                </div>
              </div>
              {isVisible3 && (
                <div className="addres-fourth-lavbox-a">
                  <div className="addres-fourth-lavbox-a1">
                    The one-time onboarding fee covers administrative,
                    operational, and technical services, including document
                    verification, menu digitization, quality checks, training on
                    using the Zomato platform, and query resolutions.
                  </div>
                  <div className="addres-fourth-lavbox-a2"></div>
                  <div className="addres-fourth-lavbox-aa3">
                    This fee will be deducted from your statement of accounts
                    only after your restaurant goes live on Zomato and starts
                    receiving online orders.
                  </div>
                </div>
              )}
            </button>
            <button className="address-fourth-lavbox">
              <div
                className="addres-fourth-lavbox-q"
                onClick={() => {
                  setIsVisible4((prevState) => !prevState);
                }}
              >
                <div className="address-fourth-lav2-ques">
                  How can I get help and support from Zomato if I get stuck?
                </div>
                <div className="address-fourth-uarrow">
                  {isVisible4 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="address-fourth-uarrow"
                    >
                      <path d="M18 14L12 8L6 14"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="address-fourth-uarrow"
                    >
                      <path d="M6 10L12 16L18 10"></path>
                    </svg>
                  )}
                </div>
              </div>
              {isVisible4 && (
                <div className="addres-fourth-lavbox-a">
                  <div className="addres-fourth-lavbox-a1">
                    The Zomato team is here to assist you.
                  </div>
                  <div className="addres-fourth-lavbox-a2"></div>
                  <div className="addres-fourth-lavbox-aa3">
                    You can reach us in two ways:
                  </div>
                  <ul className="addres-fourth-lavbox-a3">
                    <li>
                      <p className="addres-fourth-lavbox-a3li"></p>
                      <span>
                        Call our support helpline at <a>+91-97-38-38-38-38</a>{" "}
                        between 10 AM - 7 PM for immediate assistance.
                      </span>
                    </li>
                  </ul>
                  <ul className="addres-fourth-lavbox-a3">
                    <li>
                      <p className="addres-fourth-lavbox-a3li"></p>
                      <span>
                        Email us at <a>merchantonboarding@zomato.com</a>, and
                        we’ll resolve your query within 6 hours.
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </button>
            <button className="address-fourth-lavbox">
              <div
                className="addres-fourth-lavbox-q"
                onClick={() => {
                  setIsVisible5((prevState) => !prevState);
                }}
              >
                <div className="address-fourth-lav2-ques">
                  How much commission will I be charged by Zomato?
                </div>
                <div className="address-fourth-uarrow">
                  {isVisible5 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="address-fourth-uarrow"
                    >
                      <path d="M18 14L12 8L6 14"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="address-fourth-uarrow"
                    >
                      <path d="M6 10L12 16L18 10"></path>
                    </svg>
                  )}
                </div>
              </div>
              {isVisible5 && (
                <div className="addres-fourth-lavbox-a">
                  <div className="addres-fourth-lavbox-a1">
                    Zomato charges a commission for services such as order
                    placement, catalog hosting, demand generation, marketing,
                    logistics, tech infrastructure, and customer support.
                  </div>
                  <div className="addres-fourth-lavbox-a2"></div>
                  <div className="addres-fourth-lavbox-aa3">
                    The commission rates vary based on the city and the
                    restaurant, depending on factors like location and cuisine.
                    You can view your specific commission rate when you accept
                    the online ordering contract.
                  </div>
                </div>
              )}
            </button>
            <button className="address-fourth-lavbox">
              <div
                className="addres-fourth-lavbox-q"
                onClick={() => {
                  setIsVisible6((prevState) => !prevState);
                }}
              >
                <div className="address-fourth-lav2-ques">
                  How will I get my payouts?
                </div>
                <div className="address-fourth-uarrow">
                  {isVisible6 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="address-fourth-uarrow"
                    >
                      <path d="M18 14L12 8L6 14"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="address-fourth-uarrow"
                    >
                      <path d="M6 10L12 16L18 10"></path>
                    </svg>
                  )}
                </div>
              </div>
              {isVisible6 && (
                <div className="addres-fourth-lavbox-a">
                  <div className="addres-fourth-lavbox-a1">
                    Newly registered restaurants on Zomato receive weekly
                    payouts every Wednesday for transactions made from Monday to
                    Sunday of the previous week. If you prefer daily payouts,
                    you can request them through the Help Centre on the partner
                    app once your restaurant is live for online ordering.
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="addres-five-layer">
        <div className="addres-five-layer-cont">
          <div className="addres-five-layer-cont-layer1">
            <img
              src={AAdres_black_zom}
              className="addres-five-layer-cont-layer1-img"
              alt="address"
            />
            <div className="addres-five-layer-cont-layer1-boxes">
              <div className="addres-five-layer-cont-layer1-box1">
                <img src={mailicon} className="mailicon" alt="email" />
                <div className="addres-five-layer-cont-layer1-num">
                  merchantonboarding@zomato.com
                </div>
              </div>
              <div className="addres-five-layer-cont-layer1-box2">
                <img src={phoneicon} className="phoneicon" alt="phone" />
                <div className="addres-five-layer-cont-layer1-num">
                  +91 97-38-38-38-38
                </div>
              </div>
            </div>
          </div>
          <div className="addres-five-layer-cont2">
            <div className="addres-five-layer-cont2-side1">
              <div className="addres-five-layer-cont2-box1">
                <ul className="addres-five-layer-cont2-box1-topic">
                  About Zomato
                  <li>Who We Are</li>
                  <li>Blog </li>
                  <li>Work With Us</li>
                  <li>Investors Relations </li>
                  <li>Report Fraud</li>
                  <li>Press Kit</li>
                </ul>
              </div>
              <div className="addres-five-layer-cont2-box1">
                <ul className="addres-five-layer-cont2-box1-topic">
                  Zomaverse
                  <li>Zomato</li>
                  <li>Blinkit </li>
                  <li>Feeding India </li>
                  <li>Hyperpure </li>
                  <li>Zomaland </li>
                  <li>Weather Union</li>
                </ul>
              </div>
              <div className="addres-five-layer-cont2-box1">
                <ul className="addres-five-layer-cont2-box1-topic">
                  For Restaurants
                  <li>Partner With Us</li>
                  <li>Apps For You</li>
                </ul>
              </div>
              <div className="addres-five-layer-cont2-box1">
                <ul className="addres-five-layer-cont2-box1-topic">
                  Learn More
                  <li>Privacy</li>
                  <li>Security</li>
                  <li>Terms</li>
                  <li>Sitemap</li>
                </ul>
              </div>
            </div>
            <div className="addres-five-layer-cont2-side2">
              <ul className="addres-five-layer-cont2-box1-topic">
                Social Links
              </ul>
              <div className="addres-en1images">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width="26"
                  height="26"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="sc-rbbb40-0 cvuzKA"
                  className="one"
                >
                  <path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM7.0625 8.375H4.75V15.4375H7.0625V8.375ZM7.25 6.1875C7.25 5.5 6.75 5 5.9375 5C5.125 5 4.5625 5.5 4.5625 6.1875C4.5625 6.875 5.0625 7.4375 5.875 7.4375C6.6875 7.4375 7.25 6.875 7.25 6.1875ZM15.5 11.375C15.5 9.1875 14.3125 8.1875 12.8125 8.1875C11.5625 8.1875 11 8.875 10.6875 9.375V8.375H8.375C8.375 9.0625 8.375 15.4375 8.375 15.4375H10.6875V11.5C10.6875 11.3125 10.6875 11.0625 10.75 10.9375C10.9375 10.5 11.3125 10.0625 11.9375 10.0625C12.75 10.0625 13.125 10.6875 13.125 11.6875V15.4375H15.4375C15.5 15.4375 15.5 11.375 15.5 11.375Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width="26"
                  height="26"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="sc-rbbb40-0 cvuzKA"
                  className="two"
                >
                  //{" "}
                  <path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.1875 5C8.8125 5 8.625 5 8.0625 5C7.5 5.0625 7.125 5.125 6.8125 5.25C6.5 5.375 6.1875 5.5625 5.875 5.875C5.5625 6.1875 5.375 6.4375 5.25 6.8125C5.125 7.125 5 7.5 5 8.0625C5 8.625 5 8.75 5 10.1875C5 11.625 5 11.8125 5.0625 12.375C5.0625 12.9375 5.1875 13.3125 5.3125 13.625C5.4375 13.9375 5.625 14.25 5.9375 14.5625C6.1875 14.8125 6.5 15 6.875 15.1875C7.1875 15.3125 7.5625 15.4375 8.125 15.4375C8.6875 15.4375 8.875 15.5 10.25 15.5C11.6875 15.5 11.875 15.5 12.4375 15.4375C13 15.375 13.375 15.3125 13.6875 15.1875C14 15.0625 14.3125 14.875 14.625 14.5625C14.9375 14.25 15.125 14 15.25 13.625C15.375 13.3125 15.5 12.875 15.5 12.375C15.5625 11.8125 15.5625 11.625 15.5625 10.1875C15.5625 8.75 15.5625 8.625 15.5 8.0625C15.5 7.5 15.375 7.125 15.25 6.8125C15.125 6.4375 14.9375 6.1875 14.625 5.875C14.375 5.625 14.0625 5.4375 13.6875 5.25C13.375 5.125 12.9375 5.0625 12.4375 5C11.8125 5 11.625 5 10.1875 5ZM9.75 5.9375C9.875 5.9375 10.0625 5.9375 10.1875 5.9375C11.5625 5.9375 11.75 5.9375 12.3125 5.9375C12.8125 5.9375 13.0625 6.0625 13.25 6.125C13.5 6.25 13.6875 6.375 13.875 6.5C14.0625 6.625 14.1875 6.8125 14.25 7.125C14.3125 7.3125 14.4375 7.5625 14.4375 8.0625C14.5 8.625 14.5 8.8125 14.5 10.1875C14.5 11.5625 14.5 11.75 14.4375 12.3125C14.4375 12.8125 14.3125 13.125 14.25 13.3125C14.1875 13.5625 14.0625 13.6875 13.875 13.9375C13.6875 14.125 13.5 14.1875 13.25 14.3125C13.0625 14.375 12.8125 14.5 12.3125 14.5C11.75 14.5 11.5625 14.5625 10.1875 14.5625C8.8125 14.5625 8.625 14.5625 8.0625 14.5C7.5625 14.5 7.3125 14.375 7.125 14.3125C6.875 14.1875 6.6875 14.125 6.5 13.9375C6.3125 13.75 6.1875 13.5625 6.125 13.3125C6.0625 13.125 6 12.875 5.9375 12.3125C5.9375 11.75 5.9375 11.625 5.9375 10.1875C5.9375 8.8125 5.9375 8.625 5.9375 8.0625C6 7.5625 6.0625 7.3125 6.125 7.125C6.25 6.875 6.375 6.6875 6.5 6.5C6.625 6.3125 6.875 6.1875 7.125 6.125C7.3125 6.0625 7.5625 5.9375 8.0625 5.9375C8.5625 5.9375 8.75 5.9375 9.75 5.9375ZM13 6.8125C12.6875 6.8125 12.375 7.0625 12.375 7.4375C12.375 7.8125 12.625 8.0625 13 8.0625C13.375 8.0625 13.625 7.8125 13.625 7.4375C13.625 7.0625 13.3125 6.8125 13 6.8125ZM10.1875 7.5C8.75 7.5 7.5 8.6875 7.5 10.1875C7.5 11.6875 8.6875 12.875 10.1875 12.875C11.6875 12.875 12.875 11.6875 12.875 10.1875C12.875 8.6875 11.6875 7.5 10.1875 7.5ZM10.1875 8.4375C11.125 8.4375 11.9375 9.1875 11.9375 10.1875C11.9375 11.1875 11.1875 11.9375 10.1875 11.9375C9.25 11.9375 8.4375 11.1875 8.4375 10.1875C8.4375 9.1875 9.25 8.4375 10.1875 8.4375Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width="26"
                  height="26"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="sc-rbbb40-0 cvuzKA"
                  className="three"
                >
                  <title>twitter-circle</title>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision"
                    image-rendering="optimizeQuality"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z"></path>
                    <path
                      fill="#fff"
                      fill-rule="nonzero"
                      d="M318.64 157.549h33.401l-72.973 83.407 85.85 113.495h-67.222l-52.647-68.836-60.242 68.836h-33.423l78.052-89.212-82.354-107.69h68.924l47.59 62.917 55.044-62.917zm-11.724 176.908h18.51L205.95 176.493h-19.86l120.826 157.964z"
                    ></path>
                  </svg>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width="26"
                  height="26"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="sc-rbbb40-0 cvuzKA"
                  className="four"
                >
                  <path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM15.1875 7.4375C15.0625 7 14.6875 6.625 14.25 6.5C13.4375 6.25 10.1875 6.25 10.1875 6.25C10.1875 6.25 6.9375 6.25 6.125 6.5C5.6875 6.625 5.3125 7 5.1875 7.4375C5 8.25 5 10 5 10C5 10 5 11.75 5.25 12.5625C5.375 13 5.75 13.375 6.1875 13.5C7 13.75 10.25 13.75 10.25 13.75C10.25 13.75 13.5 13.75 14.3125 13.5C14.75 13.375 15.125 13 15.25 12.5625C15.5 11.75 15.5 10 15.5 10C15.5 10 15.4375 8.25 15.1875 7.4375ZM9.25 11.75V8.5L11.875 10.125L9.25 11.75Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width="26"
                  height="26"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="sc-rbbb40-0 cvuzKA"
                  className="five"
                >
                  <path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.75 15.4375V10.1875H12.1875L12.375 8.375H10.75V7.5C10.75 7.0625 10.8125 6.8125 11.5 6.8125H12.375V5H10.9375C9.1875 5 8.625 5.875 8.625 7.3125V8.375H7.5V10.1875H8.5625V15.4375C8.5625 15.4375 10.75 15.4375 10.75 15.4375Z"></path>
                </svg>
              </div>
              <img src={addstore1} className="addstore1"></img>
              <img src={addstore2} className="addstore2"></img>
            </div>
          </div>
          <div className="addres-five-layer-line"></div>
          <div className="addres-five-layer-text">
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2024 © Zomato™ Ltd.
            All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}

export default Add_ab;

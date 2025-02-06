import store1 from "./assets/googlepay.webp";
import store2 from "./assets/appstore.webp";
import phonepic from "./assets/phone-img.avif";
import "./index.css";
import { React, useState, useEffect, useRef } from "react";

function Zom_mobile() {
  const [btncl, setBtnCl] = useState("+91");
  const [view, setView] = useState(false);
  const [activeTab, setActiveTab] = useState(1); // Tracks active tab (1 for Email, 2 for Phone)
  const [focusedInput, setFocusedInput] = useState(null); // Tracks which input is focused (email or phone)

  const codes = [
    "+91",
    "+60",
    "+63",
    "+94",
    "+56",
    "+1",
    "+64",
    "+27",
    "+353",
    "+44",
    "+971",
    "+420",
    "+65",
    "+351",
    "+974",
    "+61",
    "+421",
    "+55",
    "+48",
    "+62",
    "+961",
    "+39",
    "+90",
  ];

  const bxxClickboxRef = useRef(null); // Reference for the phone number dropdown (view box)

  // Close the dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        bxxClickboxRef.current &&
        !bxxClickboxRef.current.contains(event.target)
      ) {
        setView(false); // Close dropdown when clicked outside
      }
    };

    if (view) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup on component unmount
    };
  }, [view]);

  function Touch(value) {
    setBtnCl(value);
    setView(false); // Close the dropdown after selecting a country code
  }

  function viewBox() {
    setView((prev) => !prev); // Toggle the dropdown view
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setFocusedInput(null); // Reset focused input when switching tabs (this keeps the color change)
  };

  const handleInputFocus = (inputType) => {
    setFocusedInput(inputType); // Set the focused input (email or phone)
  };

  return (
    <>
      <div className="seven-layer">
        <div className="sev-cont">
          <div className="side1">
            <img src={phonepic} className="side1image" alt="Phone" />
          </div>
          <div className="side2">
            <div className="side21">Get the Zomato App</div>
            <div className="side22">
              We will send you a link, open it on your phone to download the app
            </div>
            <div className="btns">
              <div className="sevensvg">
                <button onClick={() => handleTabClick(1)}>
                  <svg
                    viewBox="0 0 20 20"
                    width="20"
                    height="20"
                    className="circle-button"
                  >
                    <circle
                      cx="9.8"
                      cy="9.8"
                      r="9.8"
                      className={
                        activeTab === 1
                          ? "outer-circle outerclicked"
                          : "outer-circle"
                      }
                    ></circle>
                    <circle
                      cx="9.8"
                      cy="9.8"
                      r="6.2"
                      className={
                        activeTab === 1
                          ? "inner-circle innerclicked"
                          : "inner-circle"
                      }
                    ></circle>
                  </svg>
                </button>
              </div>
              <p className="btnp">Email</p>

              <div className="sevensvg">
                <button onClick={() => handleTabClick(2)}>
                  <svg
                    viewBox="0 0 20 20"
                    width="20"
                    height="20"
                    className="circle-button"
                  >
                    <circle
                      cx="9.8"
                      cy="9.8"
                      r="9.8"
                      className={
                        activeTab === 2
                          ? "outer-circle outerclicked"
                          : "outer-circle"
                      }
                    ></circle>
                    <circle
                      cx="9.8"
                      cy="9.8"
                      r="6.24"
                      className={
                        activeTab === 2
                          ? "inner-circle innerclicked"
                          : "inner-circle"
                      }
                    ></circle>
                  </svg>
                </button>
              </div>
              <p className="btnp">Phone</p>
            </div>

            <div className={`emailbox ${focusedInput ? "col_change" : ""}`}>
              {activeTab === 1 && (
                <input
                  type="text"
                  className={`bxx ${
                    focusedInput === "email" ? "col_change" : ""
                  }`}
                  placeholder="Enter Email"
                  onFocus={() => handleInputFocus("email")}
                  onBlur={() =>
                    setFocusedInput(focusedInput === "email" ? "email" : null)
                  }
                />
              )}

              {activeTab === 2 && (
                <div
                  className={`bxx ${
                    focusedInput === "phone" ? "col_change" : ""
                  }`}
                >
                  <div className="bxx-flex-box-click">
                    <button className="bxx-input" onClick={viewBox}>
                      <div className="bxx-value">{btncl}</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                      >
                        <title>chevron-down</title>
                        <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
                      </svg>
                      <span className="bxx-span"></span>
                    </button>
                    <input
                      className="bxx-input-box"
                      type="text"
                      placeholder="Enter phone number"
                      onFocus={() => handleInputFocus("phone")}
                      onBlur={() =>
                        setFocusedInput(
                          focusedInput === "phone" ? "phone" : null
                        )
                      }
                    />
                  </div>
                  {view && (
                    <div className="bxx-clickbox" ref={bxxClickboxRef}>
                      <div className="bxx-flex">
                        {codes.map((numb, index) => (
                          <button
                            key={index}
                            className="bxx-codes"
                            onClick={() => Touch(numb)}
                          >
                            {numb}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <button className="Appbtn">Share App Link</button>
            </div>

            <div className="dn">Download app from</div>
            <div className="stores">
              <img className="store1" src={store1} alt="Google Play Store" />
              <img className="store2" src={store2} alt="Apple App Store" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Zom_mobile;

import AR from "./AR";
import Archives from "./Archives";
import QR from "./QR";
import { useState } from "react";
import "./third.css";

function FinDetails() {
  const [activeTab, setActiveTab] = useState(1);

  function choose(value) {
    setActiveTab(value);
  }

  return (
    <>
      <div className="findetails-body">
        <div className="findetails-layers">
          <div className="findetails-contents">
            <button
              className={`findetails-QRbox ${
                activeTab === 1 ? "findetails-box-clicked" : ""
              }`}
              onClick={() => choose(1)}
            >
              <div className="findetails-QR">Quarterly Results</div>
            </button>
            <button
              className={`findetails-ARbox ${
                activeTab === 2 ? "findetails-box-clicked" : ""
              }`}
              onClick={() => choose(2)}
            >
              <div className="findetails-AR">Annual Reports</div>
            </button>
            <button
              className={`findetails-Abox ${
                activeTab === 3 ? "findetails-box-clicked" : ""
              }`}
              onClick={() => choose(3)}
            >
              <div className="findetails-A">Archives</div>
            </button>
          </div>
          <div className="findetails-line"></div>

          {activeTab === 1 && <QR />}
        </div>
      </div>

      {activeTab === 2 && <AR />}
      {activeTab === 3 && <Archives />}
    </>
  );
}

export default FinDetails;

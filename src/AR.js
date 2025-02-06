import "./fourth.css";
function AR() {
  return (
    <>
      <div className="Ar-body">
        <div className="Ar-contents">
          <div className="Ar-boxes">
            <div className="Ar-box1">
              <div className="Ar-box1-topics">FY 2024</div>
              <div className="Ar-box1-line"></div>
              <div className="Ar-box1-topics">FY 2023</div>
              <div className="Ar-box1-line"></div>
              <div className="Ar-box1-topics">FY 2022</div>
              <div className="Ar-box1-line"></div>
              <div className="Ar-box1-topics">FY 2021</div>
              <div className="Ar-box1-line"></div>
              <div className="Ar-box1-topics">FY 2020</div>
              <div className="Ar-box1-line"></div>
              <div className="Ar-box1-topics">FY 2019</div>
            </div>
            <div className="Ar-box2">
              <AnnualReport />
              <AnnualReport />
              <AnnualReport />
              <AnnualReport />
              <AnnualReport />
              <AnnualReport />
            </div>
            <div className="Ar-box3">
              <AGMNotice />
              <AGMNotice />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AnnualReport() {
  return (
    <>
      <div className="AnnualReport-box-outer">
        <button className="AnnualReport-box">
          <p>Annual Report</p>
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
    </>
  );
}

function AGMNotice() {
  return (
    <>
      <div className="AnnualReport-box-outer">
        <button className="AnnualReport-box">
          <p>AGM Notice</p>
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
    </>
  );
}

export default AR;

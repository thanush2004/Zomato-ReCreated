import "./third.css";
import logingoogle from "./assets/logingoogle.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [tick, setTick] = useState(false);

  const handleCheckboxChange = () => {
    setTick((prev) => !prev);
    console.log("Checkbox clicked, tick state:", !tick);
  };

  return (
    <>
      <div className="signup-layer">
        <div className="signup-conts">
          <div className="signup-flexbox">
            <div className="signup-title">Sign up</div>
            <button onClick={() => navigate("/login")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1C1C1C"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 fJjczH"
              >
                <title>cross</title>
                <path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path>
              </svg>
            </button>
          </div>

          <input className="signup-fullname" placeholder="Full Name" />
          <input className="signup-email" placeholder="Email" />
          <div className="signup-terms">
            <input type="checkbox" onChange={handleCheckboxChange} />
            <div className="signup-conditions">
              I agree to Zomato's
              <a href="#">Terms of Service, Privacy Policy</a> and{" "}
              <a href="#">Content Policies</a>
            </div>
          </div>
          <button className={`signup-cracc ${tick ? "signup-color" : ""}`}>
            Create account
          </button>
          <div className="signup-conts-line">
            <div className="signup-conts-linetext">or</div>
          </div>
          <div className="signup-conts-google">
            <img src={logingoogle} alt="Google Login" />
            <div className="signup-conts-google-text">Sign in with Google</div>
          </div>
          <div className="signup-conts-line2"></div>
          <div className="signup-conts-footer-texts">
            Already have an account? <a href="/login">Log in</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

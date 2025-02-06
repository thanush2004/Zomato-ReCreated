import { useState } from "react";
import "./index.css";
import About from "./About";
import Login from "./login";

function Entry() {
  const [showLogin, setShowLogin] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
    document.body.classList.add("modal-open");
  };

  const closeLogin = () => {
    setShowLogin(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <>
      <div className="container">
        <div className="nav">
          <div className="navbar">
            <div className="first">
              {/* Your logo and links */}
              <p>
                <a href="#getApp">Get the App</a>
              </p>
            </div>
            <div className="nav-items">
              <p className="login" onClick={openLogin}>
                Login
              </p>
              <p className="signup">Sign-up</p>
            </div>
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
    </>
  );
}

export default Entry;

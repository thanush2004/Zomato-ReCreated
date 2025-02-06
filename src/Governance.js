import Board from "./Board";
import Commitee from "./Comitee";
import { React, useState } from "react";
import "./fourth.css";
import InvAbout from "./InvAbout";
import InvBlack from "./InvBlack";
import Policy from "./policy";
import Shareholder from "./Shareholding";
function Governance() {
  const [B1, setB1] = useState(true);
  const [B2, setB2] = useState(false);
  const [B3, setB3] = useState(false);
  const [B4, setB4] = useState(false);

  function touched(value) {
    if (value == 1) {
      if (!B1) setB1(true);
      setB2(false);
      setB3(false);
      setB4(false);
    } else if (value == 2) {
      if (!B2) setB2(true);
      setB1(false);
      setB3(false);
      setB4(false);
    } else if (value == 3) {
      if (!B3) setB3(true);
      setB1(false);
      setB2(false);
      setB4(false);
    } else {
      if (!B4) setB4(true);
      setB1(false);
      setB3(false);
      setB2(false);
    }
  }
  return (
    <>
      <InvBlack />
      <div className="Gov-body">
        <div className="Gov-conts">
          <div className="Gov-layer1">Governance</div>
          <div className="Gov-layer2">
            <button
              className={`Gov-layer2-1 ${B1 ? "gov-layer2-1-clicked" : ""}`}
              onClick={() => touched(1)}
            >
              <div className="Gov-layer2-inner">Board</div>
            </button>
            <button
              className={`Gov-layer2-1 ${B2 ? "gov-layer2-1-clicked" : ""}`}
              onClick={() => touched(2)}
            >
              <div className="Gov-layer2-inner">Committee Composition</div>
            </button>
            <button
              className={`Gov-layer2-1 ${B3 ? "gov-layer2-1-clicked" : ""}`}
              onClick={() => touched(3)}
            >
              <div className="Gov-layer2-inner">Policies</div>
            </button>
            <button
              className={`Gov-layer2-1 ${B4 ? "gov-layer2-1-clicked" : ""}`}
              onClick={() => touched(4)}
            >
              <div className="Gov-layer2-inner">Shareholding Pattern</div>
            </button>
          </div>
          <div className="Gov-layer3-line"></div>
          {B1 && <Board />}
          {B2 && <Commitee />}
          {B3 && <Policy />}
          {B4 && <Shareholder />}
        </div>
      </div>
      <InvAbout />
    </>
  );
}
export default Governance;

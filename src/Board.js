import { React } from "react";
import { useNavigate } from "react-router-dom";
import "./fourth.css";
import p1 from "./assets/photo1.avif";
import p2 from "./assets/photo2.avif";
import p3 from "./assets/photo3.avif";
import p4 from "./assets/photo4.avif";
import p5 from "./assets/photo5.avif";
import p6 from "./assets/photo6.avif";

function Board() {
  const imgs = [p1, p2, p3, p4, p5, p6];
  const navigate = useNavigate();
  const names = [
    "Kaushik Dutta",
    "Deepinder Goyal",
    "Sanjeev Bikhchandani",
    "Sutapa Banerjee",
    "Namita Gupta",
    "Aparna Popat Ved",
  ];
  const dets = [
    "Chairman & Independent Director",
    "Founder, MD & CEO",
    "Non-Executive Director",
    "Independent Director",
    "Independent Director",
    "Independent Director",
  ];

  return (
    <div className="board-conts">
      <div className="board-grids">
        {imgs.map((img, index) => (
          <button
            key={index}
            className="board-button"
            onClick={() => {
              navigate("/personClicked", {
                state: {
                  name: names[index],
                  role: dets[index],
                  no: index,
                },
              });
            }}
          >
            <div className="image-container">
              <img
                src={img}
                alt={names[index]}
                className="board-image zoomed"
              />
            </div>
            <div className="board-text">
              <h4>{names[index]}</h4>
              <p>{dets[index]}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Board;

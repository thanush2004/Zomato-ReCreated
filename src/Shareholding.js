import "./fourth.css";
function Shareholder() {
  const cont = [
    "Zomato Shareholding Pattern as on December 31, 2024",
    "Zomato Shareholding Pattern as on December 02, 2024",
    "Zomato Shareholding Pattern as on November 29, 2024",
    "Zomato Shareholding Pattern as on September 30, 2024",
    "Zomato Shareholding Pattern as on June 30, 2024",
    "Zomato Shareholding Pattern as on March 31, 2024",
    "Zomato Shareholding Pattern as on December 31, 2023",
    "Zomato Shareholding Pattern as on September 30, 2023",
    "Zomato Shareholding Pattern as on June 30, 2023",
    "Zomato Shareholding Pattern as on March 31, 2023",
    "Zomato Shareholding Pattern as on December 31 2022",
    "Zomato Shareholding Pattern as on September 30 2022",
    "Zomato Shareholding Pattern as on June 30, 2022",
    "Zomato Shareholding Pattern as on March 31, 2022",
    "Zomato Shareholding Pattern as on December 31, 2021",
    "Zomato Shareholding Pattern as on September 30, 2021",
    "Zomato Limited Shareholding Pattern Post Issue, 22 July, 2021",
  ];
  return (
    <>
      <div className="sh-conts">
        <div className="sh-layer1">
          <div className="sh-topic-1">Documents</div>
          <div className="sh-topic-2">View</div>
        </div>
        <div className="sh-line"></div>
        <div className="sh-boxes">
          {cont.map((con, index) => (
            <div key={index}>
              <div className="sh-box">
                <div className="sh-c1">{con}</div>
                <div className="sh-c2">PDF</div>
              </div>
              {index !== cont.length - 1 && <div className="sh-c-line"></div>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Shareholder;

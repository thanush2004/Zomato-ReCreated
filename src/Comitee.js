function Commitee() {
  const title = [
    "Audit Committee",
    "Nomination and Remuneration Committee",
    "Stakeholder Relationship Committee",
    "Risk Management Committee",
    "Corporate Social Responsibility Committee",
  ];
  const Names = [
    [
      "Sutapa Banerjee",
      "Namita Gupta",
      "Kaushik Dutta",
      "Sanjeev Bikhchandani",
    ],
    ["Namita Gupta", "Kaushik Dutta", "Sanjeev Bikhchandani"],
    ["Deepinder GoyalSanjeev Bikhchandani", "Namita Gupta", "Deepinder Goyal"],
    ["Deepinder Goyal", "Kaushik Dutta", "Namita Gupta"],
    ["Deepinder Goyal", "Aparna Popat Ved", "Namita Gupta"],
  ];

  return (
    <div className="com-conts">
      {title.map((tit, index) => (
        <div key={index} className="com-box">
          <div className="com-title">{tit}</div>
          <div className="com-line"></div>

          <div className="com-names-box">
            {Names[index] ? (
              Names[index].map((name, i) => (
                <div key={i} className="com-name-box1">
                  <p> {name}</p>
                </div>
              ))
            ) : (
              <div className="com-no-names">No members listed</div>
            )}
          </div>

          <div className="com-role">Chairperson</div>
        </div>
      ))}
    </div>
  );
}

export default Commitee;

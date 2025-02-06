import "./fourth.css";
import i1 from "./assets/policy1.png";
import i2 from "./assets/policy2.jpeg";
import i3 from "./assets/policy3.png";
import i4 from "./assets/policy4.png";
import i5 from "./assets/policy5.png";
import i6 from "./assets/policy6.png";
import i7 from "./assets/policy7.png";
import i8 from "./assets/policy8.png";
import i9 from "./assets/policy9.png";
import i10 from "./assets/policy10.jpeg";
import i11 from "./assets/policy11.png";
import i12 from "./assets/policy12.png";
import i13 from "./assets/policy13.png";
import i14 from "./assets/policy14.png";
import i15 from "./assets/policy15.jpeg";
import i16 from "./assets/policy16.png";
import i17 from "./assets/policy17.png";
import i18 from "./assets/policy18.png";
import i19 from "./assets/policy19.png";
import i20 from "./assets/policy20.png";
import i21 from "./assets/policy21.png";
import i22 from "./assets/policy22.png";
import i23 from "./assets/policy23.png";
import i24 from "./assets/policy24.png";
import i25 from "./assets/policy25.jpeg";
import i26 from "./assets/policy26.png";
import i27 from "./assets/policy27.png";
import i28 from "./assets/policy28.png";

function Policy() {
  const pol = [
    i1,
    i2,
    i3,
    i4,
    i5,
    i6,
    i7,
    i8,
    i9,
    i10,
    i11,
    i12,
    i13,
    i14,
    i15,
    i16,
    i17,
    i18,
    i19,
    i20,
    i21,
    i22,
    i23,
    i24,
    i25,
    i26,
    i27,
    i28,
  ];
  const pd = [
    "Anti Bribery and Anti Corruption Policy",
    "Business Partner Code of Conduct",
    "Code of Conduct for Board of Directors and Senior Management Personnel",
    "Code of Conduct for Employees",
    "Code of Practices and Procedures for Disclosure of Unpublished Price Sensitive Information",
    "Conflict of Interest Policy",
    "Dividend Distribution Policy",
    "Environmental Policy",
    "Equal Opportunity, Inclusion and Diversity policy",
    "Health and Safety Policy",
    "Human Rights Policy",
    "Information Security Policy",
    "Nomination and Remuneration Policy",
    "Policy for Evaluation of the Performance of the Board of Directors",
    "Policy for enquiry for suspected Leak of UPSI",
    "Policy on Corporate Social Responsibility",
    "Policy on Determination of Materiality for Disclosures of Events or Information",
    "Policy on Determining Material Subsidiaries",
    "Policy on Familiarization Programme for Independent Directors",
    "Policy on Materiality of Related Party Transactions and Dealing with Related Party Transactions",
    "imagePolicy on Preservation and Archival of Documents",
    "Policy on Succession Planning for the Board and Senior Management Personnel",
    "Policy to Promote Diversity on the Board of Directors",
    "Risk Management Policy",
    "Stakeholder Management Policy",
    "Terms and Conditions of Appointment of Independent Directors",
    "Vigil Mechanism and Whistleblower policy",
  ];

  return (
    <>
      <div className="policy-img-grid">
        {pol.map((im, index) => (
          <div>
            <div className="pol-img-box" key={index}>
              <img src={im} alt={`Policy ${index + 1}`} />
            </div>
            <div className="pol-det">{pd[index]}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Policy;

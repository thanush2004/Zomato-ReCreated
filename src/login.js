import React, { useEffect, useState } from "react";
import "./third.css";
import { Link, useNavigate } from "react-router-dom";
import redmail from "./assets/redmail.png";
import logingoogle from "./assets/logingoogle.png";
import c1 from "./assets/con1.webp";
import c2 from "./assets/con2.webp";
import c3 from "./assets/con3.webp";
import c4 from "./assets/con4.webp";
import c5 from "./assets/con5.webp";
import c6 from "./assets/con6.webp";
import c7 from "./assets/con7.webp";
import c8 from "./assets/con8.webp";
import c9 from "./assets/con9.avif";
import c10 from "./assets/con10.webp";
import c11 from "./assets/con11.webp";
import c12 from "./assets/con12.png";
import c13 from "./assets/con13.webp";
import c14 from "./assets/con14.png";
import c15 from "./assets/con15.png";
import c16 from "./assets/con16.webp";
import c17 from "./assets/con17.webp";
import c18 from "./assets/con18.webp";
import c19 from "./assets/con19.webp";
import c20 from "./assets/con20.webp";
import c21 from "./assets/con21.png";
import c22 from "./assets/con22.webp";
import c23 from "./assets/con23.webp";
import c24 from "./assets/con24.webp";
import c25 from "./assets/con25.webp";
import c26 from "./assets/con26.webp";
import c27 from "./assets/con27.avif";
import c28 from "./assets/con28.webp";
import c29 from "./assets/con29.webp";
import c30 from "./assets/con30.webp";
import c31 from "./assets/con31.webp";
import c32 from "./assets/con32.webp";
import c33 from "./assets/con33.webp";
import c34 from "./assets/con34.webp";
import c35 from "./assets/con35.webp";
import c36 from "./assets/con36.webp";
import c37 from "./assets/con37.webp";
import c38 from "./assets/con38.webp";
import c39 from "./assets/con39.png";
import c40 from "./assets/con40.webp";
import c41 from "./assets/con41.webp";
import c42 from "./assets/con42.webp";
import c43 from "./assets/con43.webp";
import c44 from "./assets/con44.webp";
import c45 from "./assets/con45.png";
import c46 from "./assets/con46.webp";
import c47 from "./assets/con47.png";
import c48 from "./assets/con48.webp";
import c49 from "./assets/con49.webp";
import c50 from "./assets/con50.avif";
import c51 from "./assets/con51.webp";
import c52 from "./assets/con52.png";
import c53 from "./assets/con53.webp";
import c54 from "./assets/con54.png";
import c55 from "./assets/con55.png";
import c56 from "./assets/con56.webp";
import c57 from "./assets/con57.webp";
import c58 from "./assets/con58.webp";
import c59 from "./assets/con59.webp";
import c60 from "./assets/con60.webp";
import c61 from "./assets/con61.webp";
import c62 from "./assets/con62.webp";
import c63 from "./assets/con63.webp";
import c64 from "./assets/con64.webp";
import c65 from "./assets/con65.png";
import c66 from "./assets/con66.webp";
import c67 from "./assets/con67.webp";
import c68 from "./assets/con68.webp";
import c69 from "./assets/con69.webp";
import c70 from "./assets/con70.png";
import c71 from "./assets/con71.png";
import c72 from "./assets/con72.png";
import c73 from "./assets/con73.png";
import c74 from "./assets/con74.webp";
import c75 from "./assets/con75.png";
import c76 from "./assets/con76.webp";
import c77 from "./assets/con77.webp";
import c78 from "./assets/con78.webp";
import c79 from "./assets/con79.png";
import c80 from "./assets/con80.webp";
// import c81 from "./assets/con81.webp";
import c82 from "./assets/con82.webp";
import c83 from "./assets/con83.webp";
import c84 from "./assets/con84.webp";
import c85 from "./assets/con85.png";
import c86 from "./assets/con86.webp";
import c87 from "./assets/con87.webp";
import c88 from "./assets/con88.png";
import c89 from "./assets/con89.png";
import c90 from "./assets/con90.webp";
import c91 from "./assets/con91.png";
import c92 from "./assets/con92.png";
import c93 from "./assets/con93.webp";
import c94 from "./assets/con94.webp";
import c95 from "./assets/con95.webp";
import c96 from "./assets/con96.webp";
import c97 from "./assets/con97.webp";
import c98 from "./assets/con98.png";
import c99 from "./assets/con99.webp";
import c100 from "./assets/con100.webp";
import c101 from "./assets/con101.webp";
import c102 from "./assets/con102.webp";
import c103 from "./assets/con103.webp";
import c104 from "./assets/con104.webp";
import c105 from "./assets/con105.webp";
import c106 from "./assets/con106.webp";
import c107 from "./assets/con107.webp";
import c108 from "./assets/con108.webp";
import c109 from "./assets/con109.webp";
import c110 from "./assets/con110.webp";
import c111 from "./assets/con111.webp";
import c112 from "./assets/con112.webp";
import c113 from "./assets/con113.webp";
import c114 from "./assets/con114.png";
import c115 from "./assets/con115.webp";
import c116 from "./assets/con116.png";
import c117 from "./assets/con117.webp";
import c118 from "./assets/con118.webp";
import c119 from "./assets/con119.webp";
import c120 from "./assets/con120.webp";
import c121 from "./assets/con121.webp";
import c122 from "./assets/con122.png";
import c123 from "./assets/con123.webp";
import c124 from "./assets/con124.webp";
import c125 from "./assets/con125.png";
import c126 from "./assets/con126.webp";
import c127 from "./assets/con127.webp";
import c128 from "./assets/con128.webp";
import c129 from "./assets/con129.webp";
import c130 from "./assets/con130.webp";
import c131 from "./assets/con131.webp";
import c132 from "./assets/con132.webp";
import c133 from "./assets/con133.webp";
import c134 from "./assets/con134.webp";
import c135 from "./assets/con135.webp";
import c136 from "./assets/con136.webp";
import c137 from "./assets/con137.png";
import c138 from "./assets/con138.webp";
import c139 from "./assets/con139.png";
import c140 from "./assets/con140.png";
import c141 from "./assets/con141.webp";
import c142 from "./assets/con142.webp";
import c143 from "./assets/con143.png";
import c144 from "./assets/con144.webp";
import c145 from "./assets/con145.webp";
import c146 from "./assets/con146.webp";
import c147 from "./assets/con147.webp";
import c148 from "./assets/con148.webp";
import c149 from "./assets/con149.webp";
import c150 from "./assets/con150.png";
import c151 from "./assets/con151.webp";
import c152 from "./assets/con152.webp";
import c153 from "./assets/con153.png";
import c154 from "./assets/con154.webp";
import c155 from "./assets/con155.webp";
import c156 from "./assets/con156.webp";
import c157 from "./assets/con157.webp";
import c158 from "./assets/con158.webp";
import c159 from "./assets/con159.png";
import c160 from "./assets/con160.webp";
import c161 from "./assets/con161.webp";
import c162 from "./assets/con162.webp";
import c163 from "./assets/con163.png";
import c164 from "./assets/con164.webp";
import c165 from "./assets/con165.webp";
import c166 from "./assets/con166.webp";
import c167 from "./assets/con167.webp";
import c168 from "./assets/con168.webp";
import c169 from "./assets/con169.webp";
import c170 from "./assets/con170.webp";
import c171 from "./assets/con171.webp";
import c172 from "./assets/con172.webp";
import c173 from "./assets/con173.webp";
import c174 from "./assets/con174.webp";
import c175 from "./assets/con175.webp";
import c176 from "./assets/con176.webp";
import c177 from "./assets/con177.webp";
import c178 from "./assets/con178.webp";
import c179 from "./assets/con179.webp";
import c180 from "./assets/con180.png";
import c181 from "./assets/con181.png";
import c182 from "./assets/con182.png";
import c183 from "./assets/con183.webp";
import c184 from "./assets/con184.png";
import c185 from "./assets/con185.webp";
import c186 from "./assets/con186.webp";
import c187 from "./assets/con187.webp";
import c188 from "./assets/con188.png";
import c189 from "./assets/con189.webp";
import c190 from "./assets/con190.webp";
import c191 from "./assets/con191.webp";
import c192 from "./assets/con192.webp";
import c193 from "./assets/con193.webp";
import c194 from "./assets/con194.png";
import c195 from "./assets/con195.png";
import c196 from "./assets/con196.webp";
import c197 from "./assets/con197.webp";
import c198 from "./assets/con198.png";
import c199 from "./assets/con199.png";
import c200 from "./assets/con200.webp";
import c201 from "./assets/con201.png";
import c202 from "./assets/con202.webp";
import c203 from "./assets/con203.webp";
import c204 from "./assets/con204.webp";
import c205 from "./assets/con205.png";
import c206 from "./assets/con206.webp";
import c207 from "./assets/con207.webp";

function Login() {
  const countries = [
    ["India", "+91", c1],
    ["Afghanistan", "+93", c2],
    ["Albania", "+355", c3],
    ["Algeria", "+213", c4],
    ["American Samoa", "+1684", c5],
    ["Andorra", "+376", c6],
    ["Angola", "+244", c7],
    ["Anguilla", "+1264", c8],
    ["Antarctica", "+672", c9],
    ["Antigua and Barbuda", "+1-268", c10],
    ["Argentina", "+54", c11],
    ["Armenia", "+374", c12],
    ["Aruba", "+297", c13],
    ["Australia", "+61", c14],
    ["Austria", "+43", c15],
    ["Azerbaijan", "+994", c16],
    ["Bahamas", "+1-242", c17],
    ["Bahrain", "+973", c18],
    ["Bangladesh", "+880", c19],
    ["Barbados", "+1-246", c20],
    ["Belarus", "+375", c21],
    ["Belgium", "+32", c22],
    ["Belize", "+501", c23],
    ["Benin", "+229", c24],
    ["Bermuda", "+1-441", c25],
    ["Bhutan", "+975", c26],
    ["Bosnia and Herzegovina", "+387", c27],
    ["Botswana", "+267", c28],
    ["Brasil", "+55", c29],
    ["Bulgaria", "+359", c30],
    ["Burkina Faso", "+226", c31],
    ["Burundi", "+257", c32],
    ["Cambodia", "+855", c33],
    ["Cameroon", "+237", c34],
    ["Canada", "+1", c35],
    ["Cape Verde", "+238", c36],
    ["Cayman Islands", "+1-345", c37],
    ["Central African Republic", "+236", c38],
    ["Chad", "+235", c39],
    ["Chile", "+56", c40],
    ["China", "+86", c41],
    ["Colombia", "+57", c42],
    ["Comoros", "+269", c43],
    ["Congo", "+242", c44],
    ["Cook Islands", "+682", c45],
    ["Costa Rica", "+506", c46],
    ["Croatia", "+385", c47],
    ["Cuba", "+53", c48],
    ["Cyprus", "+357", c49],
    ["Czech Republic", "+420", c50],
    ["Denmark", "+45", c51],
    ["Djibouti", "+253", c52],
    ["Dominica", "+1-767", c53],
    ["Dominican Republic", "+1-809", c54],
    ["Ecuador", "+593", c55],
    ["Egypt", "+20", c56],
    ["El Salvador", "+503", c57],
    ["Equatorial Guinea", "+240", c58],
    ["Eritrea", "+291", c59],
    ["Estonia", "+372", c60],
    ["Ethiopia", "+251", c61],
    ["Falkland Islands (Malvinas)", "+500", c62],
    ["Faroe Islands", "+298", c63],
    ["Fiji", "+679", c64],
    ["Finland", "+358", c65],
    ["France", "+33", c66],
    ["French Guiana", "+594", c67],
    ["French Polynesia", "+689", c68],
    ["Gabon", "+241", c69],
    ["Gambia", "+220", c70],
    ["Georgia", "+995", c71],
    ["Germany", "+49", c72],
    ["Ghana", "+233", c73],
    ["Gibraltar", "+350", c74],
    ["Greece", "+30", c75],
    ["Greenland", "+299", c76],
    ["Grenada", "+1-473", c77],
    ["Guadeloupe", "+590", c78],
    ["Guam", "+1-671", c79],
    ["Guatemala", "+502", c80],
    ["Guinea", "+224", c82],
    ["Guinea-Bissau", "+245", c83],
    ["Guyana", "+592", c84],
    ["Haiti", "+509", c85],
    ["Honduras", "+504", c86],
    ["Hong Kong S.A.R., China", "+852", c87],
    ["Hungary", "+36", c88],
    ["Iceland", "+354", c89],
    ["Indonesia", "+62", c90],
    ["Iraq", "+964", c91],
    ["Ireland", "+353", c92],
    ["Israel", "+972", c93],
    ["Italy", "+39", c94],
    ["Jamaica", "+1-876", c95],
    ["Japan", "+81", c96],
    ["Jordan", "+962", c97],
    ["Kazakhstan", "+7", c98],
    ["Kenya", "+254", c99],
    ["Kiribati", "+686", c100],
    ["Kiribati", "+686", c101],
    ["Kuwait", "+965", c102],
    ["Kyrgyzstan", "+996", c103],
    ["Latvia", "+371", c104],
    ["Lebanon", "+961", c105],
    ["Lesotho", "+266", c106],
    ["Liberia", "+231", c107],
    ["Libya", "+218", c108],
    ["Liechtenstein", "+423", c109],
    ["Lithuania", "+370", c110],

    ["Luxembourg", "+352", c111],
    ["Macao", "+853", c112],
    ["Madagascar", "+261", c113],
    ["Malawi", "+265", c114],
    ["Malaysia", "+60", c115],
    ["Maldives", "+960", c116],
    ["Mali", "+223", c117],
    ["Malta", "+356", c118],
    ["Marshall Islands", "+692", c119],
    ["Martinique", "+596", c120],
    ["Mauritania", "+222", c121],
    ["Mauritius", "+230", c122],
    ["Mayotte", "+262", c123],
    ["Mexico", "+52", c124],
    ["Monaco", "+377", c125],
    ["Mongolia", "+976", c126],
    ["Montenegro", "+382", c127],
    ["Montserrat", "+1-664", c128],
    ["Morocco", "+212", c129],
    ["Mozambique", "+258", c130],
    ["Myanmar", "+95", c131],
    ["Namibia", "+264", c132],
    ["Nauru", "+674", c133],
    ["Nepal", "+977", c134],
    ["Netherlands", "+31", c135],
    ["New Caledonia", "+687", c136],
    ["New Zealand", "+64", c137],
    ["Nicaragua", "+505", c138],
    ["Niger", "+227", c139],
    ["Nigeria", "+234", c140],
    ["Niue", "+683", c141],
    ["Northern Mariana Islands", "+1-670", c142],
    ["Norway", "+47", c143],
    ["Oman", "+968", c144],
    ["Pakistan", "+92", c145],
    ["Palau", "+680", c146],
    ["Panama", "+507", c147],
    ["Papua New Guinea", "+675", c148],
    ["Paraguay", "+595", c149],
    ["Peru", "+51", c150],
    ["Philippines", "+63", c151],
    ["Poland", "+48", c152],
    ["Portugal", "+351", c153],
    ["Puerto Rico", "+1-787", c154],
    ["Qatar", "+974", c155],
    ["Reunion", "+262", c156],
    ["Romania", "+40", c157],
    ["Russia", "+7", c158],
    ["Rwanda", "+250", c159],
    ["Saint Kitts and Nevis", "+1-869", c160],
    ["Saint Lucia", "+1-758", c161],
    ["Saint Pierre and Miquelon", "+508", c162],
    ["Saint Vincent and the Grenadines", "+1-784", c163],
    ["Samoa", "+685", c164],
    ["San Marino", "+378", c165],
    ["Sao Tome and Principe", "+239", c166],
    ["Saudi Arabia", "+966", c167],
    ["Senegal", "+221", c168],
    ["Serbia", "+381", c169],
    ["Seychelles", "+248", c170],
    ["Sierra Leone", "+232", c171],
    ["Singapore", "+65", c172],
    ["Slovakia", "+421", c173],
    ["Slovenia", "+386", c174],
    ["Solomon Islands", "+677", c175],
    ["Somalia", "+252", c176],
    ["South Africa", "+27", c177],
    ["Spain", "+34", c178],
    ["Sri Lanka", "+94", c179],
    ["Sudan", "+249", c180],
    ["Suriname", "+597", c181],
    ["Swaziland", "+268", c182],
    ["Sweden", "+46", c183],
    ["Switzerland", "+41", c184],
    ["Tajikistan", "+992", c185],
    ["Thailand", "+66", c186],
    ["Timor-Leste", "+670", c187],
    ["Togo", "+228", c188],
    ["Tokelau", "+690", c189],
    ["Tonga", "+676", c190],
    ["Trinidad and Tobago", "+1-868", c191],
    ["Tunisia", "+216", c192],
    ["Turkey", "+90", c193],
    ["Turkmenistan", "+993", c194],
    ["Turks and Caicos Islands", "+1-649", c195],
    ["Tuvalu", "+688", c196],
    ["Uganda", "+256", c197],
    ["Ukraine", "+380", c198],
    ["UAE", "+971", c199],
    ["United Kingdom", "+44", c200],
    ["United States", "+1", c201],
    ["Uruguay", "+598", c202],
    ["Uzbekistan", "+998", c203],
    ["Vanuatu", "+678", c204],
    ["Vietnam", "+84", c205],
    ["Wallis and Futuna", "+681", c206],
    ["Yemen", "+967", c207],
  ];

  const navigate = useNavigate();
  const [btnView, SetBtnView] = useState(false);
  const [phone, setPhone] = useState("");
  const [click_country, setClick_country] = useState(88);
  const [inputFocused, setInputFocused] = useState(false);
  const [close_login, setClose_login] = useState(false);
  useEffect(() => {
    if (close_login) {
      navigate("/");
    }
  }, [close_login, navigate]);

  function btn_clicked(value) {
    setClick_country(value);
  }

  const handleBtn_Clicked = () => {
    SetBtnView(!btnView);
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  function redirect() {
    setClose_login((prev) => !prev);
  }

  const inputBorderStyle = inputFocused;
  const containerBorderStyle =
    inputFocused || phone.length > 0
      ? { border: " 2px solid green" }
      : { border: "1px solid gray" };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const validChars = /[0-9\+\-\(\)\s]/g;
    if (validChars.test(value) || value === "") {
      setPhone(value);
    }
  };

  return (
    <>
      <div className={`login-layer ${close_login ? "close" : "open"}`}>
        <div className="login-conts">
          <div className="login-conts-box">
            <div className="login-conts-title">Login</div>
            <button onClick={redirect}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1C1C1C"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className="sc-rbbb40-0 fJjczH"
              >
                <title>cross</title>
                <path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path>
              </svg>
            </button>
          </div>

          <div className="login-conts-phone" style={containerBorderStyle}>
            <button
              className="login-country-button"
              onClick={handleBtn_Clicked}
            >
              <div className="login-country-box1">
                <img src={countries[click_country][2]} alt="image" />
                <p className="login-conts-text">
                  {countries[click_country][1]}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="login-downarrow"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <div className="login-conts-phone-bar"></div>
              </div>
              {btnView && (
                <div className="flexy">
                  {countries.map((country, index) => (
                    <button
                      key={index}
                      className="flexy-button"
                      onClick={() => btn_clicked(index)}
                    >
                      <img src={country[2]} alt="flag" />
                      <p>{country[0]}</p>
                      <div className="flexy-bar"></div>
                      <span>{country[1]}</span>
                    </button>
                  ))}
                </div>
              )}
            </button>

            <input
              className="login-conts-phone_input"
              type="tel"
              value={phone}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder="Phone"
            />
          </div>
          <div className="login-conts-otp">Send One Time Password</div>
          <div className="login-conts-line">
            <div className="login-conts-linetext">or</div>
          </div>

          <div className="login-conts-mail">
            <img src={redmail} alt="redmail" />
            <div className="login-conts-mail-text">Continue with Email</div>
          </div>
          <div className="login-conts-google">
            <img src={logingoogle} alt="google" />
            Sign in with Google
          </div>
          <div className="login-conts-line2"></div>
          <div className="login-conts-createacc">
            New to Zomato?&nbsp;
            <button onClick={() => navigate("/signup")}>Create account</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

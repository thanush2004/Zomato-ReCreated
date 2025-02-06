import Zom_mobile from "./zom_mobile";
import Zom_nav from "./Zom_nav";
import "./index.css";
import About from "./About";

function GetApp() {
  return (
    <>
      <Zom_nav />
      <div className="getappseperator1"></div>
      <Zom_mobile />
      <div className="getappseperator2"></div>
      <About />
    </>
  );
}
export default GetApp;

import bl_zom from "./assets/black-zomato.avif";
import "./index.css";
function Zom_nav() {
  return (
    <>
      <div className="navbarnavs">
        <div className="zomnavs">
          <img src={bl_zom} className="zomnavlogo"></img>
        </div>
        <div className="navts">
          <div className="navtopic1">Log in</div>
          <div className="navtopic">Sign up</div>
        </div>
      </div>
    </>
  );
}
export default Zom_nav;

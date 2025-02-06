import Blogo from "./assets/addres_black_zom.webp";
function AddResWhite() {
  return (
    <>
      <div className="whiteAddResnav">
        <div className="whiteAddResnavConts">
          <img className="WhiteAddResnavlogo" src={Blogo}></img>
          <div className="whiteAddResnavbox2">
            <div className="WhiteAddReshelpline">
              Need help? Call+91 97-38-38-38-38
            </div>
            <div className="WhiteAddReslogin">Login</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddResWhite;

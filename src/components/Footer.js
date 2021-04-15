import React from "react";
import "../App.css";

const Footer = (props) => (
  <footer className="footer bg-lightCream rounded-bg pt-1 pb-1">
    <div className=" has-text-centered">
      <div>
        <small className="">
          Made with Coffee,
          {/* <span className="icon-text">
            <span className="icon">
              <i className="fas fa-coffee"></i>
            </span> */}
            <span>  Bulma, and React.</span><br></br>
          
           Designed by Mike McDonald.
        </small>
      </div>
    </div>


{/* --- ICON CREDITS --- */}
<div className="is-size-7 has-font-weight-light">
    <div >
      Icons made by{" "}
      <a href="https://www.flaticon.com/authors/ddara" title="dDara">
        dDara
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>
    <div>
      Icons made by{" "}
      <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">
        Icongeek26
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>

    <div>
      Icons made by{" "}
      <a href="https://creativemarket.com/eucalyp" title="Eucalyp">
        Eucalyp
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>

    <div>
      Icons made by{" "}
      <a
        href="https://www.flaticon.com/authors/made-by-made"
        title="Made by Made"
      >
        Made by Made
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>

    <div>
      Icons made by{" "}
      <a href="https://www.freepik.com" title="Freepik">
        Freepik
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>
    </div>
  </footer>
);

export default Footer;

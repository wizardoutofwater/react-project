import React from "react";
import "../App.css";

const Footer = (props) => (
  <footer className="footer">
    <div className="content has-text-centered">
      <div>
        <small className="level-item">
          Made with{" "}
          <span className="icon-text">
            <span className="icon">
              <i className="fas fa-coffee"></i>
            </span>
            <span>and Bulma.</span>
          </span>{" "}
          Designed by Mike McDonald.
        </small>
      </div>
    </div>

    <div>Icons made by <a href="https://creativemarket.com/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    
    <div>Icons made by <a href="https://www.flaticon.com/authors/made-by-made" title="Made by Made">Made by Made</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

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
  </footer>
);

export default Footer;
  
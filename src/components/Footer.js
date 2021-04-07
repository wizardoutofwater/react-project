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
      </footer>
)
 


export default Footer;
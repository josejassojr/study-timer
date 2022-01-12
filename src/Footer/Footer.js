// CSS and Modules
import "./Footer.css";
import React from "react";

function Footer() {
  return (
    /* jshint ignore:start */
    <footer className="Footer">
      Created by Jose Jasso Jr.{" "}
      <div id="footer-buttons">
        <a
          href="https://www.josejassojr.com/"
          target="_blank"
          rel="noreferrer"
          className="footer-button"
        >
          <i class="fas fa-laptop-code"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/josejassojr/"
          target="_blank"
          rel="noreferrer"
          className="footer-button"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/josejassojr"
          target="_blank"
          rel="noreferrer"
          className="footer-button"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="mailto:jose.d.jassojr@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="footer-button"
        >
          <i class="far fa-envelope"></i>
        </a>
      </div>
    </footer>
    /* jshint ignore:end */
  );
}
export default Footer;

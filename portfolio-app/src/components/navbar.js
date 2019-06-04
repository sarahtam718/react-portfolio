import React from "react";
import SmallLogo from "./images/small-green-dot-logo.png";

const Navbar = () => (
  <nav
    className="navbar navbar-expand-lg navbar-light bg-light shadow"
    style={{
      backgroundColor: "white",
      height: "2.5rem",
      color: "#613a43"
    }}
  >
    <a
      className="navbar-brand"
      style={{ color: "#613A43" }}
      href="https://github.com/sarahtam718"
    >
      <img
        src={SmallLogo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt=""
      />{" "}
      Sarah Tam
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a
          class="nav-item nav-link"
          style={{ color: "#613A43" }}
          href="https://github.com/sarahtam718"
        >
          Github
        </a>
        <a
          class="nav-item nav-link"
          style={{ color: "#613A43" }}
          href="https://linkedin.com/in/sarah-tam"
        >
          LinkedIn
        </a>
      </div>
    </div>
    <span class="navbar-text" style={{ color: "#613A43" }}>
      full stack web developer
    </span>
  </nav>
);

export default Navbar;
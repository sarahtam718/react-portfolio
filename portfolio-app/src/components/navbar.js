import React from "react";
import SmallLogo from "./images/small-green-dot-logo.png";

const Navbar = () => (
  <nav
    className="navbar  navbar-light bg-light shadow"
    style={{
      backgroundColor: "white",
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
    <div class="navbar-nav navbar-expand-lg mr-lg-auto">
      <a
        class="nav-item nav-link p-2"
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
    <span class="navbar-text" style={{ color: "#613A43" }}>
      full stack web developer
    </span>
  </nav>
);

export default Navbar;

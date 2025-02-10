import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="row ms-5 mt-5">
      <div className="col-4">
        <h3>
          <i className="fa-solid fa-music me-4"></i> Media Player
        </h3>
        <p>
          Designed and built with all the love in the world by the luminar team
          with the help of our contributors.
        </p>
        <p>code licenced luminar, docs CC BY 3.0.</p>
        <p>Currently v5.3.2.0</p>
      </div>
      <div className="col-2">
        <h3>Links</h3>
        <Link to={"/"} style={{ textDecoration: "none",color:"white"}}>
          Landing Page
        </Link>
        <br />
        <Link to={""} style={{ textDecoration: "none",color:"white" }}>
          Home Page
        </Link>
        <br />
        <Link to={""} style={{ textDecoration: "none",color:"white" }}>
          History Page
        </Link>
      </div>
      <div className="col-2">
        <h3>Guides</h3>
        <p>
          React <br />
          React Router <br />
          React Bootstrap
        </p>
      </div>
      <div className="col-1"></div>
      <div className="col-3">
        <h3>Contact</h3>
        <input
          type="text"
          className="border rounded-2"
          placeholder="Enter your Email here !!"
          style={{ height: "30px" }}
        />
        <button
          className="btn-info m-2 border-info rounded-3"
          style={{ width: "40px", color: "white", height: "30px" }}
        >
          {" "}
          →{" "}
        </button>
        <div className="d-flex">
          <i className="fa-brands fa-twitter m-1 ms-3"></i>
          <i className="fa-brands fa-instagram m-1 ms-4"></i>
          <i className="fa-brands fa-facebook-f m-1 ms-4"></i>
          <i className="fa-brands fa-linkedin m-1 ms-4"></i>
          <i className="fa-brands fa-github m-1 ms-4"></i>
          <i className="fa-solid fa-phone m-1 ms-4"></i>
        </div>
      </div>
      <div>
        <p className="text-center mt-1">
          Copyright © july 2024 Batch. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

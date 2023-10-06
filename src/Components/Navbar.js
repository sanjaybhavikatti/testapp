import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary `}
      data-bs-theme={props.mode}
    >
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        {/* <a className="navbar-brand" href="#">
          {props.title}
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
              {/* <a className="nav-link active" aria-current="page" href="#">
                Home
              </a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
              {/*<a className="nav-link" href="/about">
                {props.aboutText}
              </a>*/}
            </li>
          </ul>
          {/* <div className="d-flex ">
            <div className="bg-primary rounded mx-2" style={{height:'30px', width: '30px', cursor:'pointer', border: '1px'}} onClick={() => {props.toggleMode('primary')}}/>
            <div className="bg-danger rounded mx-2" style={{height:'30px', width: '30px', cursor:'pointer', border: '1px'}} onClick={() => {props.toggleMode('danger')}}/>
            <div className="bg-success rounded mx-2" style={{height:'30px', width: '30px', cursor:'pointer', border: '1px'}} onClick={() => {props.toggleMode('success')}}/>
            <div className="bg-warning rounded mx-2" style={{height:'30px', width: '30px', cursor:'pointer', border: '1px'}} onClick={() => {props.toggleMode('warning')}}/>
            <div className="bg-light rounded mx-2" style={{height:'30px', width: '30px', cursor:'pointer', border: '1px'}} onClick={() => {props.toggleMode('light')}}/>
            <div className="bg-dark rounded mx-2" style={{height:'30px', width: '30px', cursor:'pointer', border: '1px'}} onClick={() => {props.toggleMode('dark')}}/>
          </div> */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className={`btn btn-outline-${
                props.mode === "light" ? "dark" : "light"
              } me-3`}
              type="submit"
            >
              Search
            </button>
          </form>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            } mx-1`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={() => {
                props.toggleMode(null);
              }}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Toggle Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About us",
};

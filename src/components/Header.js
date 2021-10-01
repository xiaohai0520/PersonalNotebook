import React from "react";
import { getAuth, signOut } from "firebase/auth";
const Header = (props) => {
  const { setShowNumber } = props;
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" role="button">
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link" onClick={() => setShowNumber(1)}>
              Target
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link" onClick={() => setShowNumber(2)}>
              Todo
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link" onClick={() => setShowNumber(3)}>
              Team
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link" onClick={() => signOut(getAuth())}>
              Sign out
            </a>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Navbar Search */}
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="navbar-search"
              href="#"
              role="button"
            >
              <i className="fas fa-search" />
            </a>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                    <button
                      className="btn btn-navbar"
                      type="button"
                      data-widget="navbar-search"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary shadow">
        <div className="container-fluid">
          {/* Navbar Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Content */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            {/* Brand Logo/Name */}
            <a className="navbar-brand text-white fw-bold" href="#">
              🌶️ Spice & Slice
            </a>

            {/* Navigation Links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {['Home', 'About', 'Contact Us'].map((item, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link text-white" href={`#${item.toLowerCase().replace(' ', '-')}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Login/Register Links */}
            <div className="d-flex gap-2">
              <a className="btn btn-outline-light" href="/login">
                Login
              </a>
              <a className="btn btn-light text-primary" href="/register">
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

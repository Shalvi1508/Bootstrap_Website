import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="#">
            iCoder
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ backgroundColor: "white" }} // Inline style to make the icon white
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white"
                  aria-current="page"
                  to="/"
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "normal",
                    color: isActive ? "#f8f9fa" : "inherit",
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white"
                  to="/About"
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "normal",
                    color: isActive ? "#f8f9fa" : "inherit",
                  })}
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link text-white"
                  to="/Contact"
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "normal",
                    color: isActive ? "#f8f9fa" : "inherit",
                  })}
                >
                  Contact Us
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle text-white"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Topics
                </NavLink>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ backgroundColor: "white" }}
                >
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="#"
                      style={{ backgroundColor: "white", color: "black" }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#f8f9fa")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "white")
                      }
                    >
                      Technology
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="#"
                      style={{ backgroundColor: "white", color: "black" }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#f8f9fa")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "white")
                      }
                    >
                      Web Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="#"
                      style={{ backgroundColor: "white", color: "black" }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#f8f9fa")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "white")
                      }
                    >
                      Write for us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="#"
                      style={{ backgroundColor: "white", color: "black" }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#f8f9fa")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "white")
                      }
                    >
                      Support
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

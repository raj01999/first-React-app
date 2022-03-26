import propType from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode? "light":"dark"} bg-${props.mode? "light":"dark"}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="./text">
          {props.title}
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="./text">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./about">
                About
              </Link>
            </li>
          </ul>

          <div className="form-check form-switch mx-5">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.modeFun}
            />
            <label
              className={`form-check-label text-${props.mode? "dark" : "light"}`}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.modeStatus}
            </label>
          </div>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onClick={e=>{e.preventDefault()}}
              onChange = {e=>{e.target.value = "In Active!"}}
            />
            <button className="btn btn-outline-success" type="submit" onClick={e=>{e.preventDefault();}}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: propType.string.isRequired,
};

Navbar.defaultProps = {
  title: "Susritha",
};

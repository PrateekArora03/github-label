import React, { useContext } from "react";
import PropTypes from "prop-types";

import Search from "./Search";

import LabelContext from "../../context/label/labelContext";

const Navbar = ({ icon, title, searchInput, setSearchInput }) => {
  const labelContext = useContext(LabelContext);

  const { toggleNewLabel } = labelContext;

  return (
    <nav className="nav">
      <div className="label-btn">
        <i className={icon} /> {title}
      </div>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <button onClick={() => toggleNewLabel()} className="label-btn btn">
        New label
      </button>
    </nav>
  );
};

Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  icon: "fas fa-tags",
  title: "Labels"
};

export default Navbar;

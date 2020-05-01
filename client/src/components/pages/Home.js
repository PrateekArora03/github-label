import React, { Fragment, useContext, useState } from "react";
import Navbar from "../layout/Navbar";
import NewLabel from "../labels/NewLabel";
import Labels from "../labels/Labels";

import LabelContext from "../../context/label/labelContext";

const Home = () => {
  const labelContext = useContext(LabelContext);
  const [searchInput, setSearchInput] = useState("");
  const { toggle } = labelContext;
  return (
    <Fragment>
      <Navbar searchInput={searchInput} setSearchInput={setSearchInput} />
      {toggle && <NewLabel />}
      <Labels searchInput={searchInput} />
    </Fragment>
  );
};

export default Home;

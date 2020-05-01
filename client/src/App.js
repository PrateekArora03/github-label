import React from "react";

import Home from "./components/pages/Home";

import LabelState from "./context/label/LabelState";

import "./App.scss";

const App = () => {
  return (
    <LabelState>
      <div className="App">
        <Home />
      </div>
    </LabelState>
  );
};

export default App;

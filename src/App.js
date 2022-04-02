import React from "react";
import Left from "./components/Left/Left";
import Right from "./components/Right/Right";
import "./sass/App.scss";

const App = () => {
  return (
    <div className="app__main">
      <Left />
      <Right />
    </div>
  );
};

export default App;

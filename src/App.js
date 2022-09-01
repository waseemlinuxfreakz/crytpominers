import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./responsive.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Foooter from "./components/Footer";

function App() {
  return (
    <div id="App">
      <Header />
      <Main />
      {/* <Foooter /> */}
    </div>
  );
}

export default App;

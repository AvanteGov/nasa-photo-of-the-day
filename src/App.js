import React, { useState } from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer"
import PageContainer from "./components/PostPageComponents/PageContainer"


import axios from "axios"
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY


function App() {

  return (
    <div className="App">
      <div>
        {/* <HeaderContainer /> */}
      </div>
      <div>
        {/* <PageContainer /> */}
      </div>
    </div>
  );
}

export default App;

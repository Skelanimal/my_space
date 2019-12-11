import React from "react";
import { Switch, Route } from "react-router-dom";
import MainBackground from "./components/loopingBackground/Background";
import "./app.style.scss";

import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <div>
      <MainBackground />
      <Header />
      <div className="updating-page">
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

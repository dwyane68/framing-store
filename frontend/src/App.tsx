import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import CustomLayout from "./components/CustomLayout";

function App() {
  return (

      <BrowserRouter basename={"/"}>
        <Switch>
          {/*<Route path="/login" component={Login} />*/}
          <Route  path="/" component={CustomLayout} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;

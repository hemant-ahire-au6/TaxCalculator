import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Component/Login';
import TaxCalculator from './Component/TaxCalculator';

function App(props) {
  return (
    <>
     
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route exact path="/tax-calculator" component={TaxCalculator} />
        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;

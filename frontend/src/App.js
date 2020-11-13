import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { Owners } from './components/Owners';
import { Header } from './components/Header';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <div className="container-fluid">
            <Switch>
              <Route path="/testforjob/owners" component={Owners} />
              {/* <Route path="/sc/client/new" component={ClientEdit} />
              <Route path="/sc/orders" component={Orders} />
              <Route path="/sc/order/new" component={OrderEdit} /> */}
            </Switch>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

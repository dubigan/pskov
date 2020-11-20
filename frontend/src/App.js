import React, { Component, Fragment, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';

const Owners = lazy(() => import('./components/Owners'));
const Cars = lazy(() => import('./components/Cars'));
const OwnerDetail = lazy(() => import('./components/OwnerDetail'));
const CarDetail = lazy(() => import('./components/CarDetail'));
const Dashboard = lazy(() => import('./components/Dashboard'));

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Fragment>
            <Header />
            <div className="container-fluid">
              <Switch>
                <Route path="/testforjob/owners" component={Owners} />
                <Route path="/testforjob/owner" component={OwnerDetail} />
                <Route path="/testforjob/cars" component={Cars} />
                <Route path="/testforjob/car" component={CarDetail} />
                <Route path="/testforjob/dashboard" component={Dashboard} />
              </Switch>
            </div>
          </Fragment>
        </Suspense>
      </BrowserRouter>
    );
  }
}

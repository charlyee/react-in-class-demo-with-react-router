import * as React from 'react';
import { Fragment } from 'react';
import HomePage from './HomePage';
import { Route, Switch } from "react-router-dom";
import NotFound from './NotFound';
import ActvityDetails from './ActivityDetails';
import ActivityDashboard from './ActivityDashboard';
import NavBar from './Navbar';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/activities' component={ActivityDashboard} />
          <Route path='/activities/:id' component={ActvityDetails} />
          <Route path='/page1' component={Page1} />
          <Route path='/page2' component={Page2} />
          <Route path='/page3' component={Page3} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}

import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { AboutUsPage } from './components/AboutUsPage';
import { Donate } from './components/Donate';
import { Volunteer } from './components/Volunteer';
import { SignUp } from './components/SignUp';

import { Homepage } from './components/Homepage';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Homepage} />
        <Route path='/about-us' component={AboutUsPage} />
        <Route path='/donate' component={Donate} />
        <Route path='/volunteer' component={Volunteer} />
        <Route path='/sign-up' component={SignUp} />
      </Layout>
    );
  }
}

import React from 'react';

import { Route, Switch } from "react-router-dom";

import MainLayout from './layout/MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import Work from './pages/Work/Work';
import About from './pages/About/About';
import NoMatch from './pages/NoMatch/NoMatch';



function App() {
  return (
    <div className="App">
        <MainLayout>
            <Switch>
              <Route exact path={['/', '/home']} component={HomePage} />
              <Route exact path='/work' component={Work} />
              <Route exact path='/about' component={About} />

              <Route component={NoMatch} />
            </Switch>
        </MainLayout>
    </div>
  );
}

export default App;

import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './app.less';
import Card from './card/Card';
import Main from './main/Main';
import Error from './error/Error';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/card/:username/:reponame" component={Card} />
          <Route path="/error" component={Error} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

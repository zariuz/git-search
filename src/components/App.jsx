import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import './app.less';
import Main from './main/Main';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.repos.count);

  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/" component={Main} />
      </div>
    </BrowserRouter>
  );
};

export default App;

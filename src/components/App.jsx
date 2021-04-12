import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setCount} from '../reducers/reposReducer';
import './app.less';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.repos.count);

  const onCountClick = () => {
    dispatch(setCount(5));
  };

  return (
    <div className="app">
      <div>Count: {count}</div>
      <button onClick={() => onCountClick()}>COUNT</button>
    </div>
  );
};

export default App;

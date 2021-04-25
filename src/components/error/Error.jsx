import React from 'react';

const Error = (props) => {
  return (
    <div style={{textAlign: 'center'}}>
      <button onClick={() => props.history.push('/')}>Назад на Главную страницу</button>
      <div>ОШИБКА!</div>
    </div>
  );
};

export default Error;

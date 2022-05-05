import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function app() {

  return <div>
    <App />
  </div>;
}
ReactDOM.render(app(),document.getElementById('root'));
import React from 'react';
import ReactDom from 'react-dom';

//create a react component
const App = () => {
  return (
    <div>
      <h1>Welcome to the React World!</h1>
    </div>
  );
};

//take the react component and show it on the screen
ReactDom.render(<App />, document.querySelector('#root'));

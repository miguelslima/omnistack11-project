import React from 'react';

import Header from './Header';

function App() {
  let counter = 0;

  function increment() {
    counter++;
  }

  return (
    <div>
      <Header> Contador: {counter} </Header>
      <button onClick={increment}> Incrementar </button>
    </div>
  );
}

export default App;

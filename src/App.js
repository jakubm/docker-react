import React from 'react';

function CurrentDatetime() {
  return (
    <div>{ new Date().toString() }</div>
  )
}

function App() {
  return (
    <div>
      <div>Hi There</div>
      <CurrentDatetime/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';


const App = () => {

  let date = new Date().toLocaleTimeString()
  const [init, newVal] = useState(date)

  setInterval(() => {
    date = new Date().toLocaleTimeString()
    newVal(date)
  }, 1000);
  return (
    <>
      <h1>{init}</h1>
    </>
  );
}

export default App;

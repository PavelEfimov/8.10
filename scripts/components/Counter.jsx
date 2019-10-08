import React, { useState } from 'react';

const App = () => {
  // const [count, setCount] = useState(0);

  // true: 0, '0', '65', 65
  const [count, actions] = useCount(); //TODO HERE
  // actions => increase => decrease => reset


  return (
    <>
      <h1>{`state is ${count}`}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
};

export default App;

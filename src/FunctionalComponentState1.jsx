import React, { useState } from 'react';

const FunctionalComponent = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
 
 


  return (
    <div>
       <h2>I am availabe for class FunctionalComponent </h2>
      <p>yescount: {count1}</p>
      
      <button onClick={() => setCount1(count1 + 1)}>yes</button>
      <div>
      <p>nocount: {count2}</p>
      
      <button onClick={() => setCount2(count2 + 1)}>count</button>
      

      </div>
      
    </div>
    
  );

};

export default FunctionalComponent;

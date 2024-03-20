import React, { useState } from 'react';

const FunctionalComponent = () => {
 
  const[name,setName] = useState("akash");
  

   
  const updateDate = () => {
    setName(name+"uppar")
  }
 


  return (
    <div>
      
        <h1>name:{name}</h1>
        
        <button onClick={updateDate}>update</button>
        
      
    </div>
    
  );

};

export default FunctionalComponent;

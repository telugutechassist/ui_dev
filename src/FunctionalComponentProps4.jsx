import React from 'react';

const FunctionalComponentProps4 = (props) => {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default FunctionalComponentProps4;

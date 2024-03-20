import React from 'react';

const FunctionalComponentProps1 = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  );
}

export default FunctionalComponentProps1;
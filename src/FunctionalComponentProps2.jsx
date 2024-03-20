import React from 'react';

const FunctionalComponentProps2 = (props) => {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default FunctionalComponentProps2;

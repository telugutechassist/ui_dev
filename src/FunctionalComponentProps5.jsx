import React from 'react';

const FunctionalComponentProps5 = (props) => {
  return (
    <nav>
      <ul>
        {props.items.map(item => (
          <li key={item.id}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FunctionalComponentProps5;

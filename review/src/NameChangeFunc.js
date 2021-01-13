import React from 'react';

const NameChangeFunc = props => {
  const handleClick = e => {
    e.preventDefault();
    props.setName('brian');
  };

  return (
    <div><button onClick={handleClick}>set brian</button></div>
  )
}

export default NameChangeFunc;
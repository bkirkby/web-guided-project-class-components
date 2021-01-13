import React from 'react';

const Item = props => {
  const handleClick = e => {
    e.preventDefault();
    props.toggleItem(props.item.id);
  }
  return (
    <div className={`item${props.item.purchased ? ' purchased' : ''}`}>
      <p onClick={handleClick}>{props.item.name}</p>
    </div>
  );
};

export default Item;
import React from 'react';

const Item = props => {
  const handleClick = e => {
    e.preventDefault();
    props.togglePurchased(props.item.id);
  }
  return (
    <div className={`item${props.item.purchased ? ' purchased' : ''}`}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;
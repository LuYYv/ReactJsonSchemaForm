import React from 'react';
import AddBtn from "./AddBtn";

const ArrayLayout = (props) => {
  const { onAddItem } = props;
  return (
    <div className="ArrayLayout default">
      {props.children}
      <AddBtn onAddItem={onAddItem} />
    </div>
  )
}

export default ArrayLayout;
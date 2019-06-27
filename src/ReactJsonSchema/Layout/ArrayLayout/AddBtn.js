import React from 'react';
import { Icon } from "antd";

const AddBtn = ({onAddItem}) => {
  return (
    <div className="arrayAddItem" onClick={onAddItem} ><Icon type="plus" /></div>
  )
}

export default AddBtn;
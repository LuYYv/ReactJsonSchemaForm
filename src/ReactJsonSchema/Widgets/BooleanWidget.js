import React from 'react';
import { Radio } from "antd";

const BooleanWidget = (props) => {
  const defaultValue = props.data;
  return ( 
    <Radio.Group defaultValue={defaultValue} { ...props }>
      <Radio value={true} >是</Radio>
      <Radio value={false} >否</Radio>
    </Radio.Group>
  );
}

export default BooleanWidget;
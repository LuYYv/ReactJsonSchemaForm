import React from 'react';
import { Radio } from "antd";

const DefaultStringWidget = (props) => {
    return ( 
      <Radio.Group { ...props }>
        <Radio value={true}>yes</Radio>
        <Radio value={false}>no</Radio>
      </Radio.Group>
    );
}

export default DefaultStringWidget;
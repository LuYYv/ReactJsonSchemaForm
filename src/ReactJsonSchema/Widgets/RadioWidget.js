import React from 'react';
import { Radio } from "antd";

const RadioWidget = (props) => {
  const { formData } = props;
    return ( 
      <Radio.Group { ...props }>
        { formData.map((value, index) => {
            return <Radio value={value} key={index}>{value}</Radio>
          })
        }
      </Radio.Group>
    );
}

export default DefaultStringWidget;
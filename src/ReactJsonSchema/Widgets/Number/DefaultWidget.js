import React from 'react';
import { InputNumber } from 'antd';

const DefaultStringWidget = (props) => {
    return ( 
      <InputNumber { ...props }/>
     );
}
 
export default DefaultStringWidget;
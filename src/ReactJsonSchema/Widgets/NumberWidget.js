import React from 'react';
import { InputNumber } from 'antd';

const NumberWidget = (props) => {
    return ( 
      <InputNumber { ...props }/>
     );
}
 
export default NumberWidget;
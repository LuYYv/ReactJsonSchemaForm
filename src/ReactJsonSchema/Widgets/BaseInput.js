import React from 'react';
import { Input } from "antd";

const BaseInput = (props) => {
    return ( 
      <Input { ...props }></Input>
    );
}

export default BaseInput;
import React from 'react';
import BaseInput from "./BaseInput";
import BooleanWidget from "./BooleanWidget";
import NumberWidget from "./NumberWidget";

const getWidget = {
  string: {
    default: BaseInput,
  },
  number: {
    default: NumberWidget,
  },
  boolean: {
    default: BooleanWidget,
  }
}

export default getWidget;
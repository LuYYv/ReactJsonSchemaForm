import React from 'react';
import NumberWidget from "./Number";
import StringWidget from "./String";
import BooleanWidget from "./Boolean";

const getWidget = (props) => {
  const typeMap = {
    string: StringWidget,
    number: NumberWidget,
    boolean: BooleanWidget
  }
  const typeParser = () => {
    const Widget = typeMap[props.schema.type];
    return <Widget { ...props } />
  }
  return typeParser();

}

export default getWidget;
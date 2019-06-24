import React from 'react';
import NumberWidget from "./Number";
import StringWidget from "./String";

const getWidget = (props) => {
  const typeMap = {
    string: StringWidget,
    number: NumberWidget
  }
  const typeParser = () => {
    const Widget = typeMap[props.schema.type];
    return <Widget { ...props } />
  }
  return typeParser();

}

export default getWidget;
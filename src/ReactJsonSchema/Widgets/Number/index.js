import React, {Component} from 'react';
import DefaultWidget from "./DefaultWidget";

class NumberWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    const { schema, formData, onChange } = this.props;
    return ( 
      <Widget
        schema={schema}
        value={formData}
        onChange={onChange} />
     );
  }
}

const Widget =  (props) => {
  const widgetMap = {
    default: DefaultWidget,
  }
  return (()=>{
    const Widget = widgetMap[props.schema.format || `default`];
    return <Widget { ...props } />
  })()
}

export default NumberWidget;
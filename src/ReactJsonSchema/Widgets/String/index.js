import React, {Component} from 'react';
import DefaultWidget from "./DefaultWidget";

class StringWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.props.onChange(value);
  }

  render() { 
    const { schema, formData, onChange } = this.props;
    return ( 
      <Widget
        schema={schema}
        value={formData}
        onChange={this.handleChange } />
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

export default StringWidget;
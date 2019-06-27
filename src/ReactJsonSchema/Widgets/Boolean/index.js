import React, {Component} from 'react';
import DefaultWidget from "./DefaultWidget";

class BooleanWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() { 
    const { schema, formData } = this.props;
    return ( 
      <Widget
        schema={schema}
        value={formData}
        onChange={this.handleChange} />
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

export default BooleanWidget;
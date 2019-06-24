import React, { Component } from 'react';
import Widget from "../Widgets";



class NumberField extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (value) {
    console.log(value);
  } 

  render() { 
    const { schema, formData, $id } = this.props;
    return ( 
      <div>
        <Widget
          schema={schema}
          formData={formData}
          onChange={this.handleChange} />
      </div>
     );
  }
}
 
export default NumberField;
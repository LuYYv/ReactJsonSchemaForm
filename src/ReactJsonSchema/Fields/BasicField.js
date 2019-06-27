import React, { Component } from 'react';
import Widget from "../Widgets";
import { TitleField } from './TitleField';

class BasicField extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (value) {
    this.props.onChange({value, id: this.props.$id});
  } 

  render() { 
    const {schema, formData} = this.props;
    return ( 
      <div className="basicField">
        <TitleField 
          title={schema.title} />
        <Widget
          schema={schema}
          formData={formData}
          onChange={this.handleChange} />
      </div>
     );
  }
}
 
export default BasicField;
import React, { Component } from 'react';
import Widget from "../Widgets";
import { TitleField } from './TitleField';
import checker from "../../Form/FormChecker";

class BasicField extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleChange (value) {
    this.props.onChange({value, id: this.props.$id});
  } 

  handleCheck (value) {
    const { schema, formData } = this.props;
    const errorSchema = checker({ schema, formData });

    console.log(errorSchema);
  }


  render() { 
    const {schema, formData} = this.props;
    return ( 
      <div className="basic-field">
        <Label 
          title={schema.title}
          require={schema.require} />
        <Widget
          schema={schema}
          formData={formData}
          onChange={this.handleChange}
          onCheck={this.handleCheck} />
      </div>
     );
  }
}

const Label = ({ title, require }) => {
  return (
    <div className="label">
        { title }
        { require && `*` }
    </div>
  )
}
 
export default BasicField;
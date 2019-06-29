import React, { Component } from 'react';
import getWidget from "../Widgets";
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
    const { schema, formData, require=false } = this.props;
    const Widget = getWidget[schema.type][`default`];
    console.log(require);
    return ( 
      <div className="basic-field">
        {schema.title &&
          <Label 
          title={schema.title}
          require={require} />}
        <Widget
          schema={schema}
          data={formData}
          onChange={this.handleChange}
          onBlur={this.handleCheck} />
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
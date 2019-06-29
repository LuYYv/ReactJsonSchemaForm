import React, { Component } from 'react';
import getWidget from "../Widgets";
import checker from "../../Form/FormChecker";

class BasicField extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      errorConfig: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleChange (e) {
    const value = e.target ? e.target.value : e;
    this.props.onChange({value, id: this.props.$id});
  } 

  handleCheck (value) {
    const { schema, formData } = this.props;
    const errorSchema = checker({ schema, formData });
    this.setState(this.changeVaild(errorSchema == undefined ? null : errorSchema.errorConfig));
  }

  changeVaild (errorConfig) {
    return { errorConfig };
  }


  render() { 
    const { schema, formData, require=false } = this.props;
    const { errorConfig } = this.state;
    const Widget = getWidget[schema.type][`default`];
    return ( 
      <div className="basic-field">
        {schema.title &&
          <Label 
          title={schema.title}
          require={require} />}
        <Widget
          schema={schema}
          value={formData}
          onChange={this.handleChange}
          onBlur={this.handleCheck} />
        {errorConfig && 
          <div className="error-config">
            {errorConfig}
          </div>
        }
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
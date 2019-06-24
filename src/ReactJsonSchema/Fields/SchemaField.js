import React, {Component} from 'react';
import StringField from './StringField';
import NumberField from './NumberField';
import ObjectField from './ObjectField';

class SchemaField extends Component {
  render() { 
    let Field = renderField(this.props.schema.type)
    return (
      <Field 
        {...this.props} />
    ) 
  }
}


export const renderField = (type)=> {
  const fieldMap = {
    "object": ObjectField,
    "string": StringField,
    "number": NumberField,
    // "array": ArrayField,
    // "boolean": BooleanField,
  }
  return fieldMap[type];
}
 
export default SchemaField;
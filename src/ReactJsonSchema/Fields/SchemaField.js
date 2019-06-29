import React from 'react';
import BasicField from './BasicField';
import ObjectField from './ObjectField';
import ArrayField from './ArrayField'

const SchemaField = (props) => {
  let Field = renderField(props.schema.type)
  if(!Field) throw `type is inValid`;
  return (
    <Field 
      {...props} />
  ) 
}


const renderField = (type)=> {
  const fieldMap = {
    "object": ObjectField,
    "string": BasicField,
    "number": BasicField,
    "array": ArrayField,
    "boolean": BasicField,
  }
  return fieldMap[type];
}
 
export default SchemaField;
import React, { useState, useEffect } from 'react';
import ReactJsonSchema from "../JsonSchema";
import { useFormdataInit } from './useFormdataInit'
import _ from 'lodash';

const Form = (props) => {
  const [schema, setSchema] = useState(null);
  useEffect(() => {
    //todo: schemaCheck
    setSchema(props.schema);
  }, 
    [props.schema]
  );

  const [formData, setFormData] = useState(null);
  useEffect(() => {
    if(schema === null) return;
    function getFormData() {
      let _formData = useFormdataInit(schema);
      return _.merge(_formData, props.formData);
    }
    setFormData(getFormData());
  },
    [schema, props.formData]
  );

  return (
    <div>
      <ReactJsonSchema
        schema={schema}
        formData={formData} >
        loading...
      </ReactJsonSchema>
    </div>
  )
}

export default Form
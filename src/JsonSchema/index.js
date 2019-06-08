import React, { useState, useEffect } from 'react';
import SchemaField from './Fields/SchemaField'

const ReactJsonSchema = (props) => {
  if(props.schema && props.formData) {
    return (
      <div className="json-schema-container">
        <SchemaField
          $id={"root"}
          { ...props } />
      </div>
    )
  }
  return props.children;
}

export default ReactJsonSchema
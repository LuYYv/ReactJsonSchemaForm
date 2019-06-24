import React from 'react';
import SchemaField from "./Fields/SchemaField";

const ReactJsonSchema = (props) => {
  return (
    <div className="json-schema-container">
      <SchemaField
        $id={"root"}
        { ...props } />
    </div>
  )
}

export default ReactJsonSchema;
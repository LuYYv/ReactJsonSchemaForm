import React from 'react';
import SchemaField from './SchemaField';

const ObjectField = (props) => {

    const {schema, formData, $id, onChange} = props;
    return Object.keys(schema.properties).map(i=>
        <SchemaField
          key={`${$id}-${i}`}
          $id={`${$id}-${i}`}
          schema={schema.properties[i]}
          formData={formData[i]}
          onChange={onChange} />
    )
}

export default ObjectField;
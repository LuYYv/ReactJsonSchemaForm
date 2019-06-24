import React, {Component} from 'react';
import SchemaField from './SchemaField';

class ObjectField extends Component {

  render() { 
    const {schema, formData, $id} = this.props;
    return Object.keys(schema.properties).map(i=>
        <SchemaField
          key={`${$id}-${i}`}
          $id={`${$id}-${i}`}
          schema={schema.properties[i]}
          formData={formData[i]} />
    )
  }
}

export default ObjectField;
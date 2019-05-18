import React, { Component } from 'react';
import SchemaField from './SchemaField';

class ObjectField extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {schema, formData, uiSchema, $id} = this.props;
        return ( 
            <div>
                {Object.keys(schema.properties).map(i=>{
                    return <SchemaField
                            key={`${$id}-${i}`}
                            $id={`${$id}-${i}`}
                            jsonSchema={schema.properties[i]}
                            formData={formData[i]}
                         />
                })}
            </div>
         );
    }
}
 
export default ObjectField;
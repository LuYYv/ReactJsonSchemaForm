import React from 'react';
import SchemaField from './SchemaField';


const ObjectField = (props) => {
    return (
       <div className="object-field">
           <h3>{props.schema.title}</h3>
           <PropertisFields { ...props } />
       </div>
    )
}

const PropertisFields = ({ schema, formData = {}, $id }) => {
    return (
        Object.keys(schema.properties).map(i=>{
            return <SchemaField
                    key={`${$id}-${i}`}
                    $id={`${$id}-${i}`}
                    schema={schema.properties[i]}
                    formData={formData[i]} />
        })
    )
}

export default ObjectField;
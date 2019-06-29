import React from 'react';
import SchemaField from './SchemaField';
import TieleField, { TitleField } from "./TitleField";

const ObjectField = (props) => {

    const { schema:{title} } = props;
    return (
        <div className="object-field">
            <TitleField 
                title={title} />
            <Properties
                { ...props } />
        </div>
    )

}

const Properties = (props) => {
    const {schema, formData, $id, onChange} = props;
    return Object.keys(schema.properties).map(i=>{
        const require = schema.require == undefined ? false : schema.require.indexOf(i) === (-1) ? false : true;
        return (
          <SchemaField
            key={`${$id}-${i}`}
            $id={`${$id}-${i}`}
            schema={schema.properties[i]}
            formData={formData[i]}
            require={require}
            onChange={onChange} />
        )
    })
}

export default ObjectField;
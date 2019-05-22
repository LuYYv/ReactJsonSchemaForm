import React from 'react';
import StringField from './StringField';
import NumberField from './NumberField';
import ObjectField from './ObjectField';

const fieldMap = {
    "object": ObjectField,
    "string": StringField,
    "number": NumberField
}


export const fieldRegister = ({jsonSchema, formData, uiSchema, $id, onChange})=> {
        const Field = fieldMap[jsonSchema.type];
        if (Field == undefined) throw "schema error";
        return (
            <Field 
                schema={jsonSchema} formData={formData} uiSchema={uiSchema} $id={$id} onChange={onChange}
            />
        );
}
import React from 'react';
import StringField from './StringField';
import NumberField from './NumberField';
import ObjectField from './ObjectField';

export const fieldRegister = ({jsonSchema, formData, uiSchema, $id, onChange})=> {
    const field = {
        "object": <ObjectField schema={jsonSchema} formData={formData} uiSchema={uiSchema} $id={$id} onChange={onChange}/>,
        "string": <StringField schema={jsonSchema} formData={formData} uiSchema={uiSchema} $id={$id} onChange={onChange}/>,
        "number": <NumberField schema={jsonSchema} formData={formData} uiSchema={uiSchema} $id={$id} onChange={onChange}/>,
    }[jsonSchema.type];
    if (field === undefined) throw "schema error";
    return field;
}
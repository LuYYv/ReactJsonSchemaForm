import React, { Component } from 'react';
import StringField from './StringField';
import NumberField from './NumberField';
import ObjectField from './ObjectField'

export const fieldRegister = ({jsonSchema, formData, uiSchema, $id})=> {
    let field = {
        "object": <ObjectField schema={jsonSchema} formData={formData} uiSchema={uiSchema} $id={$id} />,
        "string": <StringField schema={jsonSchema} formData={formData} uiSchema={uiSchema} $id={$id} />,
        "number": <NumberField schema={jsonSchema} formData={formData} uiSchema={uiSchema} $id={$id} />,
    }[jsonSchema.type];
    if (field === undefined) throw "schema error";
    return field;
}
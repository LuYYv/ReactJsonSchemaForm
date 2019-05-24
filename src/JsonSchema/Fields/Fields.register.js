import React from 'react';
import StringField from './StringField';
import NumberField from './NumberField';
import ObjectField from './ObjectField';
import ArrayField from './ArrayField';

const fieldMap = {
    "object": ObjectField,
    "string": StringField,
    "number": NumberField,
    "array": ArrayField,
}


export const fieldRegister = (type)=> {
        const Field = fieldMap[type];
        if (Field == undefined) throw "schema error";
        return (
            Field
        );
}
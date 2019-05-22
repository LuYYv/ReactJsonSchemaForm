import React from 'react';
import TextInput from './TextInput';

const widgetMap = {
    string: {
        default: TextInput
    }
}

/**
 *
 * @param {object} params.schema
 * @param {object} params.formData
 * @param {string} params.name
 * @param {boolean} params.required
 * @param {function} params.onChange
 */
export const getWidgetBySchema = ({ schema, formData, name, required, onChange }) => {
    let Widget = widgetMap[schema.type][schema.format || 'default'];
    return (
        <Widget
            schema={schema}
            formData={formData}
            name={name}
            required={required}
            onChange={onChange}
        />
    )
}

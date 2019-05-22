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
 * @param {string} params.name
 * @param {boolean} params.required
 */
export const getWidgetBySchema = ({ schema, name, required }) => {
    let Widget = widgetMap[schema.type][schema.format || 'default'];
    return (
        <Widget
            schema={schema}
            name={name}
            required={required}
        />
    )
}

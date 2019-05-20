import React from 'react';
import TextInput from './TextInput';

const widgetMap = {
    string: {
        default: TextInput
    }
}

export const getWidgetBySchema = ({ schema }) => {
    let Widget = widgetMap[schema.type][schema.format || 'default'];
    return (
        <Widget 
            schema={schema}
        />
    )
}

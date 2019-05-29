import React from 'react';
import { render } from 'react-dom';
import App from 'react-jsonschema-yyv';
// import App from '../lib/App';
import {schema, formData} from '../mockData'


render(
    <App jsonSchema={schema}
        formData={formData}
        uiSchema={{}} />,
    document.getElementById('root')
)
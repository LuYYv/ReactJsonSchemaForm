import React from 'react';
import { render } from 'react-dom';
import App from './App';
import {schema, formData} from '../mockData'


render(
    <App jsonSchema={schema}
        formData={formData}
        uiSchema={{}} />,
    document.getElementById('root')
)

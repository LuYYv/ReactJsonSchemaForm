import React from 'react';
import { render } from 'react-dom';
import Form from './Form/Form';
import {schema, formData} from '../mockData'


render(
    <Form 
        schema={schema}
        formData={formData} />,
    document.getElementById('root')
)
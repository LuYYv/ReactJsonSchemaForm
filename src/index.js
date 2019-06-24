import React from 'react';
import { render } from 'react-dom';
import {schema, formData} from '../mockData'
import Form from "./Form";


render(
    <Form
      schema={schema}
      formData={formData} />,
    document.getElementById('root')
)
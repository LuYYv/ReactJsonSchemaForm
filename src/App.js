import React, { Component } from 'react';
import Form from './Form';
import './app.scss';
import { schema, formData } from '../mockData';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {
        return (
            <div>
                <Form
                    schema={schema}
                    formData={formData}
                />
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import Form from './Form';
import './app.scss';
import { schema } from '../mockData';

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
                />
            </div>
        );
    }
}

export default App;

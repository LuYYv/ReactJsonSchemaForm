import React, { Component } from 'react';
import ReactJsonForm from './ReactJsonForm/ReactJsonFrom';
import { schema } from '../mockData';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div>
                <ReactJsonForm
                    schema={schema}
                />
            </div>
        );
    }
}

export default App;
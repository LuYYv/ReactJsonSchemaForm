import React, { Component } from 'react';
import _ from 'lodash';
import {transDefData} from './form.transer';
import ReactJsonSchema from './JsonSchema'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonSchema: null,
            formData: null,
            uiData: null,
            componentInit: false
        }
    }

    componentDidMount() {
        const {jsonSchema, formData, uiData} = this.props;
        let defFormData = transDefData(jsonSchema);
        let _formData = _.merge(defFormData, formData); 
        this.setState({
            jsonSchema,
            formData: _formData,
            uiData,
            componentInit: true
        })
    }

    render() {
        if( !this.state.componentInit ) return null;
        const {jsonSchema, formData, uiSchema} = this.state;
        return (
            <div>
                <ReactJsonSchema
                    jsonSchema={jsonSchema}
                    formData={formData}
                    uiSchema={uiSchema} />
            </div>
        );
    }
}

export default App;
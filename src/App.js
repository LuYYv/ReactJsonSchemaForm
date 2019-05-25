import React, { Component } from 'react';
import _ from 'lodash';
import {transDefData} from './form.transer';
import ReactJsonSchema from './JsonSchema'
import {schemaChecker} from './schemaChecker'


class App extends Component {
    constructor(props) {
        super(props);
        this.handleFormDataChange = this.handleFormDataChange.bind(this);
        this.state = {
            jsonSchema: null,
            formData: null,
            uiData: null,
            componentInit: false
        }
    }

    componentDidMount() {
        const {jsonSchema, formData, uiData} = this.props;
        schemaChecker(jsonSchema); //会崩
        let defFormData = transDefData(jsonSchema);
        let _formData = _.merge(defFormData, formData); 
        this.setState({
            jsonSchema,
            formData: _formData,
            uiData,
            componentInit: true
        })
    }

    handleFormDataChange (value, id) {
        const {formData} = this.state;
        let path = id.split('-').slice(1);
        _.set(formData, path, value);
        this.setState({
            formData
        })
    }

    render() {
        if( !this.state.componentInit ) return null;
        const {jsonSchema, formData = {}, uiSchema} = this.state;


        return (
            <div>
                <ReactJsonSchema
                    jsonSchema={jsonSchema}
                    formData={formData}
                    uiSchema={uiSchema} 
                    onChange={this.handleFormDataChange} />
            </div>
        );
    }
}

export default App;
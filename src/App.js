import React, { Component } from 'react';
import _ from 'lodash';
import {transDefData} from './form.transer';
import ReactJsonSchema from './JsonSchema'

class App extends Component {
    constructor(props) {
        super(props);
        this.handleFormDataChange = this.handleFormDataChange.bind(this);
        this._createChangedData = this._createChangedData.bind(this);
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

    _createChangedData (value, path) {
        let Data = {};
        if (path.length === 1) 
            Data[path[0]] = value;
        else{
            Data[path[0]] = this._createChangedData(value, path.slice(1))
        }
        return Data;
    }

    handleFormDataChange (value, id) {
        const {formData} = this.state;
        let path = id.split('-').slice(1);
        let newData = this._createChangedData(value, path);
        let _formData = _.merge(formData, newData);
        this.setState({
            formData: _formData
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
                    uiSchema={uiSchema} 
                    onChange={this.handleFormDataChange} />
            </div>
        );
    }
}

export default App;
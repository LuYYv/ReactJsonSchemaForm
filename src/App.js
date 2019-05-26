import React, { Component } from 'react';
import _ from 'lodash';
import {transDefData} from './form.transer';
import ReactJsonSchema from './JsonSchema'
import {schemaChecker} from './schemaChecker'
import formateCheck from './JsonSchema/formateCheck'
import './App.scss'


class App extends Component {
    constructor(props) {
        super(props);
        this.handleFormDataChange = this.handleFormDataChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this._createRederDom = this._createRederDom.bind(this);
        this.state = {
            schema: null,
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
            schema: jsonSchema,
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

    handleSubmit () {
        const {formData, schema} = this.state;
        const errorSchema = formateCheck({schema, formData});
        _.merge(schema, errorSchema);
        if (errorSchema != undefined) {
            this.setState ({
                schema,
            })
            alert(`格式错误!`)
        }

        
    }

    _createRederDom () {
        if( !this.state.componentInit ) return null;
        const {schema, formData = {}, uiSchema} = this.state;
        const dom = 
            <div className="container">
                <ReactJsonSchema
                    schema={schema}
                    formData={formData}
                    uiSchema={uiSchema} 
                    onChange={this.handleFormDataChange} />
                <div className="submit"
                     onClick={this.handleSubmit}>
                    <span>提 交</span> 
                </div>
            </div>
        return dom;
    }

    render() {

        return (
            this._createRederDom()
        );
    }
}

export default App;
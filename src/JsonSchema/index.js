import React, { Component } from 'react';
import SchemaField from './Fields/SchemaField'

class ReactJsonSchema extends Component {
    constructor () {
        super();
        this.handleChange = this.handleChange.bind(this)
        this.state = { }
    }

    handleChange(value,id) {
        const {formData, onChange} = this.props;
        if ( onChange === undefined ) return formData;
        onChange (value, id);
    }

    render() {
        const {jsonSchema, formData, uiSchema} = this.props;
        return (
           <div className="json-schema-container">
                <SchemaField
                    $id={"root"}
                    jsonSchema={jsonSchema}
                    formData={formData} 
                    onChange={this.handleChange} />
           </div>
        )
    }

}

export default ReactJsonSchema;
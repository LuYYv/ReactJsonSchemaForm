import React, { Component } from 'react';
import SchemaField from './Fields/SchemaField'

class ReactJsonSchema extends Component {
    constructor () {
        super();
        this.state = { }
    }


    render() {
        const {jsonSchema, formData, uiSchema} = this.props;
        return (
           <div className="json-schema-container">
                <SchemaField
                    $id={"root"}
                    jsonSchema={jsonSchema}
                    formData={formData} />
           </div>
        )
    }

}

export default ReactJsonSchema;
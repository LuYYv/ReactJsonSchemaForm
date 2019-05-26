import React, { Component } from 'react';
import SchemaField from './Fields/SchemaField'
import "./style/index.scss";

class ReactJsonSchema extends Component {
    constructor () {
        super();
        this.state = { }
    }

    render() {
        const {schema, formData={}, uiSchema} = this.props;
        return (
           <div className="json-schema-container">
                <SchemaField
                    $id={"root"}
                    schema={schema}
                    formData={formData} 
                    onChange={this.props.onChange} />
           </div>
        )
    }

}

export default ReactJsonSchema;
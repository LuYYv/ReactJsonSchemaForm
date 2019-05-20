import React, { Component } from 'react';
import SchemaField from './Fields/SchemaField';

/**
 * @constructor
 * @param {object} props.schema  schema
 * @param {object} props.formData  formData
 * @param {object} props.uiSchema  uiSchema
 * @param {function} props.onChange  值域改变时调用的方法
 */
class JsonSchema extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="json-schema">

            </div>
        );
    }
}

export default JsonSchema;
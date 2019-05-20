import React, { Component } from 'react';
import SchemaField from './Fields/SchemaField/index';

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
        const { schema, formData, uiSchema, onChange } = this.props;
        return (
            <div className="json-schema">
                <SchemaField
                    schema={schema}
                    formData={formData}
                    uiSchema={uiSchema}
                    onChange={onChange}
                    $id='$root'  //根级识别符
                />
            </div>
        );
    }
}

export default JsonSchema;
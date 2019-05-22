import React, { Component } from 'react';
import SchemaField from './Fields/SchemaField';
import './Styles/antdbase.less';  //antd样式的入口文件，修改主题的乳沟
import './Styles/index.scss';

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

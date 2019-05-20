import React, { Component } from 'react';
import FormDataInit from './formdata.init';
import './react-json-form.scss';
import JsonSchema from '../JsonSchema/JsonSchema';

class ReactJsonForm extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.initFormConfig();
    }

    /**
     * 获取初始化的schema formData uiSchema, 并且做必要的处理
     * @return
     */
    initFormConfig() {
        const { schema, formData = {}, uiSchema = {} } = this.props;
        const _formData = new FormDataInit({ schema, formData }).getInitFormData();
        //后期如果要对初始化的schema进行处理，在这个地方做处理然后setState
        this.setState({
            schema: schema,
            formData: _formData,
            uiSchema
        });
    }

    render() {
        const { schema, formData, uiSchema } = this.state;
        return (
            <div className="json-schema-form">
                <JsonSchema
                    schema={schema}
                    formData={formData}
                    uiSchema={uiSchema}
                />
            </div>
        );
    }
}

export default ReactJsonForm;

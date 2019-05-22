import React, { Component } from 'react';
import FormDataInit from './formdata.init';
import JsonSchema from '../JsonSchema/JsonSchema';
import './style.scss';

class ReactJsonForm extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            componentInit: false
        }
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
            uiSchema,
            componentInit: true
        });
    }

    onChange(e, path) {
        let _path = path.split('.').splice(1).join('.');
        let _formData = JSON.parse(JSON.stringify(this.state.formData));
        _.set(_formData, _path, e);
        this.setState({ formData: JSON.parse(JSON.stringify(_formData)) });
    }

    render() {
        const { componentInit, schema, formData, uiSchema } = this.state;
        if (!componentInit) return null;
        return (
            <div className="json-schema-form">
                <JsonSchema
                    schema={schema}
                    formData={formData}
                    uiSchema={uiSchema}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default ReactJsonForm;

import React, { Component } from 'react';
import FormDataInit from './formdata.init';
import JsonSchema from '../JsonSchema/JsonSchema';
import './style.scss';

/**
 * 表单整体
 * @component
 * @constructor
 * @param {object} props.schema
 * @param {object} props.formData
 * @param {object} props.uiSchema
 */
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

    /**
     * 某个值域改变的时候， 根据path去更新数据，并过滤掉undefined
     * @param {*} e  改变的值域对应的value， 任意类型，校验在相应的field做好
     * @param {string} path  改变值域的路径
     */
    onChange(e, path) {
        let _path = path.split('.').splice(1).join('.');
        let _formData = JSON.parse(JSON.stringify(this.state.formData));
        _.set(_formData, _path, e);
        this.setState({ formData: JSON.parse(JSON.stringify(_formData)) }, () => {
            console.log(this.state.formData);
        });
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

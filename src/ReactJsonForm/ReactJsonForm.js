import React, { Component } from 'react';
import FormDataInit from './formdata.init';

class ReactJsonForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        this.initFormConfig();  //
    }

    /**
     * 获取初始化的schema formData uiSchema, 并且做必要的处理
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
        return (
            <div className="json-schema-form">
                
            </div>
        );
    }
}

export default ReactJsonForm;

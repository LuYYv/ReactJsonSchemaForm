import React, { Component } from 'react';
import FormItem from '../FormItem';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

/**
 * boolean类型默认单选框
 * @constructor
 * @component
 */
class BooleanRadio extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onChange && this.props.onChange(e.target.value, this.props.$id);
    }

    render() {
        const { schema, formData, name, required } = this.props;
        return (
            <FormItem
                name={name}
                title={schema.title}
                required={required}
                className="boolean-radio-widget"
            >
                <RadioGroup 
                    name="radiogroup" 
                    value={formData}
                    onChange={this.onChange}
                >
                    <Radio value={true}>是</Radio>
                    <Radio value={false}>否</Radio>
                </RadioGroup>
            </FormItem>
        );
    }
}

export default BooleanRadio;

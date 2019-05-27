import React, { Component } from 'react';
import FormItem from '../FormItem';
import FormatInput from 'react-number-format';
import { InputNumber, Input } from 'antd';

class NumberInput extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onChange && this.props.onChange(e.floatValue, this.props.$id);
    }

    render() {
        const { schema, formData, name, required } = this.props;
        return (
            <FormItem
                name={name}
                title={schema.title}
                required={required}
                className="text-input-widget"
            >
                <FormatInput
                    customInput={Input}
                    value={formData}
                    onValueChange={this.onChange}
                    maxLength={15}   //默认最大长度15， 定义的最大长度不能超过15
                />
            </FormItem>
        );
    }
}

export default NumberInput;
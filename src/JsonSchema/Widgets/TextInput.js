import React, { Component } from 'react';
import FormItem from '../FormItem';
import { Input } from 'antd';
import InputFormat from 'react-number-format';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        let _v = e.target.value;
        this.props.onChange && this.props.onChange(_v == "" ? undefined : _v);
    }

    render() {
        const { schema, formData, name, required } = this.props;
        const _props = {
            value: formData,
            onChange: this.onChange
        }
        return (
            <FormItem
                name={name}
                title={schema.title}
                required={required}
                className="text-input-widget"
            >
                <NormalText {..._props} />
            </FormItem>
        );
    }
}

/**
 * 普通文本输入框
 */
class NormalText extends Component {
    render() {
        const { value, onChange } = this.props;
        return (
            <Input
                value={value}
                onChange={onChange}
            />
        )
    }
}

/**
 * 带有特殊format的输入框
 */

export default TextInput;

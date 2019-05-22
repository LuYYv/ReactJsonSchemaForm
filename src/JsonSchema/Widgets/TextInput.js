import React, { Component } from 'react';
import FormItem from '../FormItem';
import { Input } from 'antd';

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
        return (
            <FormItem
                name={name}
                title={schema.title}
                required={required}
            >
                <Input
                    value={formData}
                    onChange={this.onChange}
                />
            </FormItem>
        );
    }
}

export default TextInput;

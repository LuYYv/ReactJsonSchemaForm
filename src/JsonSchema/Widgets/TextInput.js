import React, { Component } from 'react';
import FormItem from '../FormItem';
import { Input } from 'antd';

class TextInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { schema, name, required } = this.props;
        return (
            <FormItem
                name={name}
                title={schema.title}
                reuqired={required}
            >
                <Input />
            </FormItem>
        );
    }
}

export default TextInput;

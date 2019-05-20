import React, { Component } from 'react';
import FormItem from '../FormItem';
import { Input } from 'antd';

class TextInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { schema } = this.props;
        return (
            <FormItem
                title={schema.title}
            >
                <Input />
            </FormItem>
        );
    }
}

export default TextInput;

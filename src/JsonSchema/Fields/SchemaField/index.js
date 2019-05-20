import React, { Component } from 'react';
import './style.scss';

/**
 * @constructor
 * @param {object} props.schema
 * @param {object} props.formData
 * @param {object} props.uiSchema
 * @param {string} props.$id  每个field的idPath 如a.b.c
 * @param {function} props.onChange  值域改变时调用
*/
class SchemaField extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {
        return (
            <div className="schema-field"></div>
        );
    }
}

export default SchemaField;
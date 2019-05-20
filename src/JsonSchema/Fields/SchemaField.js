import React, { Component } from 'react';
import {fieldRegister} from './Fields.register';

class SchemaField extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {  }
    }

    handleChange(value, id){
        const {formData, onChange} = this.props;
        if ( onChange === undefined ) return formData;
        onChange (value, id);
    }

    render() { 
        const {$id, jsonSchema, formData} = this.props;
        return ( 
            <div className="schema-field">
                {fieldRegister({
                    $id,
                    jsonSchema,
                    formData,
                    onChange: this.handleChange
                })}
            </div>
         );
    }
}
 
export default SchemaField;
import React, { Component } from 'react';
import {fieldRegister} from './Fields.register';

class SchemaField extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        const {$id, jsonSchema, formData} = this.props;
        return ( 
            <div className="schema-field">
                {fieldRegister({
                    $id,
                    jsonSchema,
                    formData,
                    onChange: this.props.onChange
                })}
            </div>
         );
    }
}
 
export default SchemaField;
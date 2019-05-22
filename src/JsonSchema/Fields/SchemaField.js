import React, { Component } from 'react';
import {fieldRegister} from './Fields.register';

class SchemaField extends Component {


    render() { 
        let Field = fieldRegister(this.props.schema.type)
        return (
                <Field 
                    {...this.props}/>
        )
   }
}
 
export default SchemaField;
import React, { Component } from 'react';

class StringField extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {schema, formData, uiSchema, $id} = this.props;
        return ( 
            <div className={$id}>
                string
            </div>
         );
    }
}
 
export default StringField;
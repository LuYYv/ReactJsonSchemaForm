import React, { Component } from 'react';

class NumberField extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {schema, formData, uiSchema, $id} = this.props;
        return ( 
            <div className={$id}>
                number
            </div>
         );
    }
}
 
export default NumberField;
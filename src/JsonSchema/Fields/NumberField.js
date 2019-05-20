import React, { Component } from 'react';

class NumberField extends Component {
    constructor(props) {
        super(props);
        this.handChange = this.handChange.bind(this);
        this.state = {  }
    }

    handChange (e) {
        const {formData, onChange, $id} = this.props;
        if ( onChange === undefined ) return formData;
        onChange (e.target.value, $id);
    }

    render() { 
        const {schema, formData, uiSchema, $id} = this.props;
        return ( 
            <div className={$id}>
                <div>{schema.title}:</div>
                <input 
                    type={schema.type} 
                    value={formData}
                    onChange={this.handChange} />
            </div>
         );
    }
}
 
export default NumberField;
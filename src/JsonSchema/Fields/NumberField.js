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
        const {schema:{type, title}, formData, uiSchema, $id} = this.props;
        return ( 
            <div className="input-wrapper">
                <span className="title number-title">{title}:</span>
                <input className="input number-input"
                    type={type} 
                    value={formData}
                    onChange={this.handChange} />
            </div>
         );
    }
}
 
export default NumberField;
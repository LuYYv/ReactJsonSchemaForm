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
        onChange (e.target.value === "" ? undefined : e.target.value, $id);
    }

    render() { 
        const {schema:{type, title, mustFill}, formData, uiSchema, $id} = this.props;
        return ( 
            <div className="input-wrapper number-field">
                <span className="label">{title} :</span>
                {mustFill?<span className="must-fill">*</span>:null}
                <input className="input"
                    type={type}
                    value={formData || ""}
                    onChange={this.handChange} />
            </div>
         );
    }
}
 
export default NumberField;
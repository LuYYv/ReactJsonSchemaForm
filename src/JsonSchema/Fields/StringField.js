import React, { Component } from 'react';

class StringField extends Component {
    handChange (e) {
        const {formData, onChange, $id} = this.props;
        if ( onChange === undefined ) 
            throw `${$id} onChange is required`;
        onChange (e.target.value === "" ? undefined : e.target.value, $id);
    }

    render() { 
        const {schema:{type, title}, mustFill, formData, uiSchema, $id} = this.props;
        return ( 
            <div className="input-wrapper string-field">
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
 
export default StringField;
import React, { Component } from 'react';

class StringField extends Component {
    constructor(props) {
        super(props);
        this.handChange = this.handChange.bind(this);
        this.state = {  }
    }

    handChange (e) {
        const {formData, onChange, $id} = this.props;
        if ( onChange === undefined ) 
            throw `${$id} onChange is required`;
        onChange (e.target.value, $id);
    }

    render() { 
        const {schema:{type, title}, formData, uiSchema, $id} = this.props;
        return ( 
            <div className="input-wrapper">
                <span className="title string-title">{title}:</span>
                <input className="input string-input"
                    type={type}
                    value={formData}
                    onChange={this.handChange} />
            </div>
         );
    }
}
 
export default StringField;
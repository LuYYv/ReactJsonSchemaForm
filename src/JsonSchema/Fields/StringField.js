import React, { Component } from 'react';
import formateCheck from '../formateCheck';

class StringField extends Component {
    constructor () {
        super ();
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.state = {
            errorConfig : undefined,
        }
    }


    handleChange (e) {
        const {formData, onChange, $id, schema:{readOnly}} = this.props;
        if ( readOnly || onChange === undefined ) return;
        onChange (e.target.value === "" ? undefined : e.target.value, $id);
    }

    handleBlur () {
        const {schema, formData, mustFill} = this.props
        const {errorConfig} = formateCheck({schema, formData, mustFill}) || {};
        if (errorConfig == undefined) {
            return;
        }
        this.setState ({
            errorConfig,
        })
    }

    render() { 
        const {schema:{type, title, readOnly}, mustFill, formData, uiSchema, $id} = this.props;
        const errorConfig = this.state.errorConfig || this.props.schema.errorConfig;
        return ( 
            <div className={`input-wrapper string-field ${errorConfig==undefined ? '' : 'error-field'} ${readOnly ? "readOnly" : ""}`} >
                <span className="label">{title}  :</span>
                {mustFill?<span className="must-fill">*</span>:null}
                <div className="input">
                    <input
                        type={type}
                        value={formData || ""}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur} />
                    <div className="error-config">{errorConfig ? errorConfig : ""}</div>
                </div>
            </div>
         );
    }
}
 
export default StringField;
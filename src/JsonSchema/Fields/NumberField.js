import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

class NumberField extends Component {
    constructor(props) {
        super(props);
        this.handChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.state = { 
            errorConfig: undefined,
         }
    }

    handleChange ({floatValue}) {
        const {formData, onChange, $id} = this.props;
        if ( onChange === undefined ) return formData;
        onChange ( floatValue, $id);
    }

    handleBlur () {
        const {schema, formData, mustFill} = this.props
        const {errorConfig} = formateCheck({schema, formData, mustFill}) || {};
        if (errorConfig == undefined) return;
        this.setState ({
            errorConfig,
        })
    }

    render() { 
        const {schema:{title, mustFill}, formData, uiSchema, $id} = this.props;
        const errorConfig = this.state.errorConfig || this.props.schema.errorConfig;
        return ( 
            <div className={`input-wrapper number-field ${errorConfig ? 'error-field' : ''}`}>
                <span className="label">{title} :</span>
                {mustFill?<span className="must-fill">*</span>:null}
                <div className="input">
                    <NumberFormat
                        value= {formData}
                        onValueChange={this.handleChange}
                        customInput={Input}
                        onBlur={this.handleBlur}
                        />
                </div>
            </div>
         );
    }
}

class Input extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <input className="hehe" 
            value={this.props.value} 
            onChange={this.props.onChange}
            onBlur={this.props.handleBlur}
                 />
        )
    }
}
 
export default NumberField;
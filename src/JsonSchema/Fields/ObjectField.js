import React, { Component } from 'react';
import SchemaField from './SchemaField';

class ObjectField extends Component {
    constructor(props) {
        super(props);
        this._createRender = this._createRender.bind(this);
        this.handChange = this.handChange.bind(this);
        this.state = {  }
    }

    _createRender () {
        const {schema, formData, uiSchema, $id} = this.props;
        let objectProperties = Object.keys(schema.properties).map(i=>{
            return <SchemaField
                    key={`${$id}-${i}`}
                    $id={`${$id}-${i}`}
                    jsonSchema={schema.properties[i]}
                    formData={formData[i]}
                    onChange={this.handChange}
                 />
        })

        return objectProperties;
    }

    handChange (value, id) {
        const {formData, onChange} = this.props;
        if ( onChange === undefined ) return formData;
        onChange (value, id);
    }

    render() { 

        return ( 
            <div>
                {this._createRender()}
            </div>
         );
    }
}
 
export default ObjectField;
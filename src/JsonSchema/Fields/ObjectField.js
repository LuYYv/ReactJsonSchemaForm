import React, { Component } from 'react';
import SchemaField from './SchemaField';

class ObjectField extends Component {
    constructor(props) {
        super(props);
        this._createRender = this._createRender.bind(this);
        this.state = {  }
    }

    _createRender () {
        const {schema, formData = {}, uiSchema, $id} = this.props;
        const readOnly = schema.readOnly == undefined ? false : schema.readOnly
        const require = schema.require === undefined ? [] : schema.require;
        let objectProperties = Object.keys(schema.properties).map(i=>{
            let mustFill = require.indexOf(i) !== -1 ? true : false ;
            return <SchemaField
                    mustFill={mustFill}
                    key={`${$id}-${i}`}
                    $id={`${$id}-${i}`}
                    schema={schema.properties[i]}
                    formData={formData[i]}
                    onChange={this.props.onChange}
                    readOnly={readOnly}
                 />
        })

        return objectProperties;
    }

    render() { 
        return ( 
            <div>
                <h3>{this.props.schema.title}</h3>
                {this._createRender()}
            </div>
         );
    }
}
 
export default ObjectField;
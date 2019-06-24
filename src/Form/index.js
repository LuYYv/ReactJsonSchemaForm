import React, { Component } from 'react';
import _ from 'lodash';
import { dataParser } from "./FormData.Init";
import ReactJsonSchema from '../ReactJsonSchema';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schema: null,
            formData: null,
            componentInit: false,
        }
    }

    componentDidMount() {
        const {schema, formData} = this.props;
        let defFormData = dataParser(schema);
        let _formData = _.merge(defFormData, formData);
        this.setState({
            schema: schema,
            formData: _formData,
            componentInit: true
        })
    }

    render() {
      if( !this.state.componentInit ) return null;
      const {schema, formData={}} = this.state;
      return ( 
        <ReactJsonSchema
          schema={schema}
          formData={formData} />
          // onChange={this.handleFormDataChange} />
      )
    }
}



export default App;
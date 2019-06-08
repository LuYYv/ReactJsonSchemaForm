import React from 'react';
import {useFieldParser} from './Fields.register';


const SchemaField = (props) => {
    console.log(props);
    let Field = useFieldParser(props.schema.type)
    return (
      <Field 
        {...props} />
    )
}

export default SchemaField;
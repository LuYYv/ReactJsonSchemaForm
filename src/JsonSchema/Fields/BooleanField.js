import React, { Component } from 'react';

class BooleanField extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {schema:{title}, formData, uiSchema, $id} = this.props;
        return ( 
            <div className="boolen-field" >
                <form >
                    <input name="是" type="radio" value="true"/>
                    <input name="否" type="radio" value="false"/>
                </form>
           </div>
         );
    }
}
 
export default BooleanField;
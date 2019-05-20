import React, { Component } from 'react';

class FormItem extends Component {
    
    render() {
        const {
            title
        } = this.props;
        return (  
            <div className="form-item">
                <div className="label">
                    {title} :
                </div>
                <div className="widget">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
 
export default FormItem;

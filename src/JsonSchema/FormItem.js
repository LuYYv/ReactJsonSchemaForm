import React, { Component } from 'react';

/**
 * widget的基础组件， 包括每行的标题， require等
 * @reactComponent
 * @constructor
 * @param {string} props.name  schema的名字
 * @param {string} props.title  控件的title
 * @param {boolean} props.required  是否必填
 */
class FormItem extends Component {
    render() {
        const {
            title,
            name,
            required
        } = this.props;

        return (
            <div className="form-item">
                <div className="label">
                    { required == true ? <span className="required-mark">*</span> : null }
                    {title ? `${title} :` : `${name} :`}
                </div>
                <div className="widget">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default FormItem;

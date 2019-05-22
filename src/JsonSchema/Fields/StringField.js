import React, { Component } from 'react';
import { getWidgetBySchema } from '../Widgets/widget.parser';

/**
 * @constructor
 * @param {object} props.schema
 * @param {object} props.formData
 * @param {object} props.uiSchema
 * @param {string} props.$id  每个field的idPath 如a.b.c
 * @param {function} props.onChange  值域改变时调用
*/
class StringField extends Component {
    constructor(props) {
        super(props);
    }

    //根据schema生成指定的组件
    getWidget() {
        const { schema, name, required } = this.props;
        return getWidgetBySchema({ schema, name, required })
    }

    render() {
        return (
            <div className="string-field">
                { this.getWidget() }
            </div>
        );
    }
}

export default StringField;

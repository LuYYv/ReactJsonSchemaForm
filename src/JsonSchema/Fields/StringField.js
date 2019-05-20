import React, { Component } from 'react';
import { getWidgetBySchema } from '../Widgets/widget.parser';

class StringField extends Component {
    constructor(props) {
        super(props);
    }

    getWidget() {
        const { schema } = this.props;
        return getWidgetBySchema({ schema })
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

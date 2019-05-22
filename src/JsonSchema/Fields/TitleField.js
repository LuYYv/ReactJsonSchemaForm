import React, { Component } from 'react';

/**
 * @constructor
 * @param {object} props.title
*/
class TitleField extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title } = this.props;
        return (
            <div className="title-field">{title}</div>
        );
    }
}

export default TitleField;

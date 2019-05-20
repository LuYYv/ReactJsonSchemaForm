import React, { Component } from 'react';

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

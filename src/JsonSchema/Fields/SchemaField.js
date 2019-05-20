import React, { Component } from 'react';
import { getTargetFieldBySchema } from './field.parser';

/**
 * @constructor
 * @param {object} props.schema
 * @param {object} props.formData
 * @param {object} props.uiSchema
 * @param {string} props.$id  每个field的idPath 如a.b.c
 * @param {function} props.onChange  值域改变时调用
*/
class SchemaField extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * 根据schema的type获取到不同的组件
     * @return {component}  各种类型的组件
    */
    getViewField () {
        const {
            schema,
            formData,
            uiSchema,
            $id,
            onChange
        } = this.props;
        //获取不同类型的field
        let View = getTargetFieldBySchema(schema.type);
        return (
            <View
                schema={schema}
                $id={$id}
            />
        )
    }

    render() {
        return (
            <div className="schema-field">
                {this.getViewField()}
            </div>
        );
    }
}

export default SchemaField;

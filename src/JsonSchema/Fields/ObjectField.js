import React, { Component } from 'react';
import SchemaField from './SchemaField';
import LayoutWrapper from '../Layout';

/**
 * @constructor
 * @param {object} props.schema
 * @param {object} props.formData
 * @param {object} props.uiSchema
 * @param {string} props.$id  每个field的idPath 如a.b.c
 * @param {function} props.onChange  值域改变时调用
*/
class ObjectField extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * 根据当前object的schema获取所有子节点的field
     * @return {array}  filed的数组
    */
    getChildField() {
        const {
            schema,
            $id
        } = this.props;
        let _view = [];
        //遍历所有子节点
        console.log(schema);
        Object.keys(schema.properties).map(k => {
            let _idPath = `${$id}.${k}`;  //当前节点的path
            _view.push(
                <SchemaField
                    schema={schema.properties[k]}
                    name={k}
                    $id={_idPath}
                    key={_idPath}
                />
            )
        })
        return _view;
    }

    render() {
        const { schema } = this.props;
        let child = this.getChildField();
        return (
            <div className="object-field">
                {LayoutWrapper({ schema, child })}
            </div>
        );
    }
}

export default ObjectField;

import React, { Component } from 'react';
import SchemaField from './SchemaField';
import LayoutWrapper from '../Layout';
import { Icon, Button } from 'antd';
import FormDataInit from '../../Form/formdata.init';

const { typeParser, objectParser } = new FormDataInit();

/**
 * @constructor
 * @param {object} props.schema
 * @param {object} props.formData
 * @param {object} props.uiSchema
 * @param {string} props.$id  每个field的idPath 如a.b.c
 * @param {function} props.onChange  值域改变时调用
*/
class ArrayField extends Component {
    constructor(props) {
        super(props);
        this.onItemMove = this.onItemMove.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
    }

    /**
     * 根据schema，和formData的长度返回对应的children
     * @return {component}
     */
    getChildField() {
        const {
            schema,
            formData = [],
            uiSchema,
            $id,
            onChange
        } = this.props;
        let renderchilds = [];   //默认返回空childs
        //根据formData的长度返回个数
        if (formData.length > 0) {
            let _schema = { ...schema.items };
            if (_schema.type == 'object') _schema.title = null;
            formData.map((f, i) => {
                let idPath = `${$id}[${i}]`;
                renderchilds.push(
                    <div className="array-field-item" key={idPath}>
                        <div className="order-mark">{i + 1}</div>
                        {this.getOperationButtons(i, formData.length, schema)}
                        <SchemaField
                            schema={_schema}
                            formData={f}
                            $id={idPath}
                            onChange={onChange}
                        />
                    </div>
                )
            })
        }
        let add_button = !schema.maxItems || formData.length < schema.maxItems ?
            <Button className="array-add-button" key="array-add-button" icon="plus" type="primary" onClick={this.onAddItem}></Button> :
            null;
        return [
            renderchilds,
            add_button
        ]
    }

    getOperationButtons(index, length, schema) {
        let ope_btn = (
            <div className="operation-btn-group">
                {index !== 0 && schema.moveable !== false ? <Icon className="icon up" type="up-circle" theme="filled" onClick={e => this.onItemMove(e, index, 1)} /> : null}
                {index < length - 1 && schema.moveable !== false ? <Icon className="icon down" type="down-circle" theme="filled" onClick={e => this.onItemMove(e, index, -1)} /> : null}
                {schema.minItems < length ? <Icon className="icon delete" type="close-circle" theme="filled" onClick={e => this.onItemDelete(e, index)} /> : null}
            </div>
        )
        return ope_btn;
    }

    onItemMove(e, index, dirc) {
        let _formData = JSON.parse(JSON.stringify(this.props.formData));
        [_formData[index], _formData[index - dirc]] = [_formData[index - dirc], _formData[index]];
        this.props.onChange && this.props.onChange(_formData, this.props.$id);
    }

    onItemDelete(e, index) {
        let _formData = JSON.parse(JSON.stringify(this.props.formData));
        _formData.splice(index, 1);
        this.props.onChange && this.props.onChange(_formData, this.props.$id);
    }

    onAddItem() {
        let _formData = JSON.parse(JSON.stringify(this.props.formData));
        const { schema: { items } } = this.props;
        let newDefault = items.type == 'object' ? objectParser({ schema: items.properties }) || {} : typeParser[items.type]({ schema: items }) || null;
        _formData.push(newDefault);
        this.props.onChange && this.props.onChange(_formData, this.props.$id);
    }

    render() {
        const { schema } = this.props;
        let child = this.getChildField();
        return (
            <div className="array-field">
                {LayoutWrapper({ schema, child })}
            </div>
        );
    }
}

export default ArrayField;

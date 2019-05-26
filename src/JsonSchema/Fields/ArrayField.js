import React, { Component } from 'react';
import SchemaField from "./SchemaField";
import _ from "lodash";
import arrayLayout from '../Layout/ArrayLayout'
import {itemsTranser, objectTranser } from '../../form.transer';

class ArrayField extends Component {
    constructor(props) {
        super(props);
        this._createRederDom = this._createRederDom.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.moveItem = this.moveItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {  }
    }

    _createRederDom () {
        const {schema, schema:{minItems=1, items}, formData, $id} = this.props;
        let itemsArray = [];
        for (let i=0; (i<minItems || i<formData.length); i++ ) {
            const value = formData[i] ? formData[i] : undefined;
            itemsArray.push (
                <div className="array-items" key={i}>
                    <SchemaField 
                        schema = {items}
                        formData = {value}
                        $id={`${$id}-${i}`}
                        onChange={this.handleChange} />
                    <div className="item-handle" >
                        <span className="up" onClick={()=>(this.moveItem({direct:"up", index:i}))}>上移</span>
                        <span className="down" onClick={()=>{this.moveItem({direct:"down", index:i})}}>下移</span>
                        <span className="delete" onClick={()=>(this.deleteItem(i))} >删除</span>
                    </div>
                </div>
                
            )
        }
        return arrayLayout({itemsArray, addItem: this.addItem, schema })
    }

    addItem () {
        const {schema, formData, onChange, $id} = this.props;
        formData.push(schema.default);
        onChange(formData, $id);
    }

    deleteItem (index) {
        const {formData, onChange, $id} = this.props;
        formData.splice(index, 1)
        onChange(formData, $id);
    }

    moveItem ({direct, index}) {
        const {formData, onChange, $id} = this.props;
        const targetIndex = index + {up: -1, down: 1}[direct];
        const value = formData[index];
        formData[index] = formData[targetIndex];
        formData[targetIndex] = value;
        onChange(formData, $id);
    }

    handleChange (value, id) {
        const {formData, onChange, $id} = this.props;
        const index = id.split("-").pop()
        formData[index] = value;
        onChange(formData, $id);
    }

    render() { 
        return (
            <div className="array-field">
                {this._createRederDom()}
            </div>
          );
    }
}
 
export default ArrayField;


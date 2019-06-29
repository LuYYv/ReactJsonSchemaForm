import React, { Component } from 'react';
import SchemaField from "./SchemaField";
import { TitleField } from "./TitleField";
import { objectTranser, itemsTranser } from '../../Form/FormData.Init'
import { Icon } from 'antd'
import getLayout from '../Layout';
import _ from "lodash";

class ArrayField extends Component {
  constructor(props) {
      super(props);
      this.state = {  }
      this.defaultFormData = undefined;
      this.handleDelItem = this.handleDelItem.bind(this);
      this.handleMoveItem = this.handleMoveItem.bind(this);
      this.handleAddItem = this.handleAddItem.bind(this);
  }

  componentDidMount() {
    this.defaultFormData = (() => {
      const { schema, schema: { items } } = this.props;
      return items.type == 'object' ? objectTranser({ schema: items.properties }) || {} : itemsTranser(items) || null;
    })()
  }

  handleAddItem () {
    const {schema, formData, onChange, $id} = this.props;
    const _formData = JSON.parse(JSON.stringify(formData));
    _formData.push(this.defaultFormData);
    onChange({value: _formData, id: $id});
  }

  handleDelItem (index) {
    const _formData = JSON.parse(JSON.stringify(this.props.formData));
    _formData.splice(index, 1);
    this.props.onChange({value: _formData, id: this.props.$id});
  }

  handleMoveItem ({ index, direct }) {
    const {formData, onChange, $id} = this.props;
    const targetIndex = index + {up: -1, down: 1}[direct];
    const value = formData[index];
    formData[index] = formData[targetIndex];
    formData[targetIndex] = value;
    onChange({value: formData, id: $id});
  }

  render() { 
    const Operates = {onDelItem: this.handleDelItem, onMoveItem: this.handleMoveItem}
    const ArrayLayout = getLayout({type: `array`});
    return (
      <ArrayLayout onAddItem={this.handleAddItem} >
        <TitleField 
          title={this.props.schema.title} />
        <ArrayItems 
          { ...this.props }
          Operates={Operates} />
      </ArrayLayout>
    )
  }
}

const ArrayItems = ({ schema, schema:{minLens=1, items, maxLens=10000}, formData, $id, onChange, Operates }) => {
  let doms = [];
  const length = formData.length
  for (let i=0; i<length; i++ ) {
  //   console.log(items);
  //   console.log(formData[i]);
    doms.push (
        <div className="array-items" key={i}>
          <SchemaField 
            schema = {items}
            formData = {formData[i]}
            $id={`${$id}[${i}]`}
            onChange={onChange} />
          <OperateBtns 
            index={i}
            minLens={minLens}
            curLength={length}
            { ...Operates } />
        </div>
      )
  }
  return doms;
}

const OperateBtns = ({ index, onDelItem, onMoveItem, minLens=0, curLength }) => {
  return (
      <div className="arrayHandle">
        { index > 0 && 
          <span className="moveupItem" onClick={()=>{onMoveItem({index, direct: `up`})}} > <Icon type="up" /> </span> }
        { index < curLength-1 && 
          <span className="movedownItem" onClick={()=>{onMoveItem({index, direct: `down`})}} > <Icon type="down" /> </span> }
        { curLength > minLens && 
          <span className="delItem" onClick={()=>{onDelItem(index)}}> <Icon type="delete"/> </span> }
      </div>
  )
}

 
export default ArrayField;
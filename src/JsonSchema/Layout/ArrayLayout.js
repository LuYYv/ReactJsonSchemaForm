
import React from 'react';
import '../style/ArrayField.scss';

const arrayLayout = ({ itemsArray, addItem , schema, addAble})=> {
    return (
        <div className="array-field">
            <h3 className="title">
                {schema.title}
            </h3>
            <div className="array-wrapper">
                {itemsArray}
                {addAble ? <span className="add-item" onClick={addItem}>添加</span> : null}
            </div>
        </div>
    )
}


export default arrayLayout;

import React from 'react';
import '../style/ArrayField.scss';

const arrayLayout = ({ itemsArray, addItem , schema})=> {
    return (
        <div className="array-field">
            <h3 className="title">
                {schema.title}
            </h3>
            <div className="array-wrapper">
                {itemsArray}
                <span className="add-item" onClick={addItem}>添加</span>
            </div>
        </div>
    )
}


export default arrayLayout;
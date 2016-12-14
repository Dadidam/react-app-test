import React from 'react';
import Item from './Item';
import './Editor.css';

export default (props) => {
    if (!props.show) {
        return null;
    }

    return (
        <div className="editor">
            {props.data.map((item, i) => {
                return (
                    <div key={i}>
                        <Item 
                            data={item} 
                            editItemHandler={props.editItemHandler}
                            toggleItemHandler={props.toggleItemHandler}
                        />
                    </div>
                )
            })}
            <button onClick={props.addItemHandler}>Add item</button>
        </div>
    )
}

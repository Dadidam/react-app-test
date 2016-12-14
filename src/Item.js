import React from 'react';
// import './Editor.css';

export default (props) => {
    let value = props.data.info;

    const onChangeHandler = (e) => {
        value = e.target.value;

        props.editItemHandler(props.data.id, value);
    };

    const label = props.data.disabled ? 'Show item' : 'Hide item';
    const btnState = value.length;

    return (
        <div>
            <textarea 
                defaultValue={value}
                onChange={onChangeHandler}
            />
            <button
                onClick={props.toggleItemHandler.bind(this, props.data.id)}
                disabled={!btnState}
            >
                {label}
            </button>
        </div>
    )
}

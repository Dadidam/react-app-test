import React from 'react';
import './Editor.css';

export default (props) => {
    if (!props.show) {
        return null;
    }

    return (
        <div className="editor">This is editor</div>
    )
}

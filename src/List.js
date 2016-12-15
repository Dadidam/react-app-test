import React from 'react';
import './List.css';

export default (props) => {
    const emptyMsg = 'List is empty. Use the editor to add new employee.';
    const hasActiveItems = props.data.some(item => item.disabled === false);

    return (
        <div className="list">
            <h3>Employee List</h3>
            {!props.data.length || !hasActiveItems ? emptyMsg :
                <div>
                    {props.data.map((item, i) => {
                        if (!item.disabled) {
                            return <pre key={i} className="listItem">{item.info}</pre>
                        }
                        return null;
                    })}
                </div>
            }
        </div>
    )
}

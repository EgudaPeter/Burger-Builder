import React from 'react';
import './Control.css';

const Control = (props) => (
    <div className ="Control ">
        <div className = 'Label'>{props.label}</div>
        <button className = 'Less' onClick = {props.removeButton}>Remove</button>
        <button className = 'More' onClick = {props.addButton}>Add</button>
    </div>
)

export default Control;
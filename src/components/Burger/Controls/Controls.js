import React from 'react';
import "./Controls.css"
import Control from './Control/Control';

const controlTypes = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
];

const Controls = (props) => (
    <div className="Controls">
        <p className='Price'>Current price: ${props.price}</p>
        {controlTypes.map(
            controlType => (
                <Control
                    key={controlType.label}
                    label={controlType.label}
                    addButton={() => props.ingredientAdded(controlType.type)} 
                    removeButton={() => props.ingredientRemoved(controlType.type)}
                    />
            )
        )}
    </div>
);

export default Controls;
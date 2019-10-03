import React from 'react';
import './Layout.css';

const layout = (props) =>
    (
        <div>
            <div>Toolbar, Side-drawer, Backdrop</div>
            <main className = 'Content'>
                {props.children}
            </main>
        </div>
    );

export default layout;
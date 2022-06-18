//import { useState } from 'react'

export default function List(props) {

    return (
        <div style={{marginTop: '1rem'}}>
            <div style={{ border: '1px solid' }}>
                <div style={{ width: '30rem', padding: '0.5rem' }}>{props.task}</div>
            </div>
        </div>
    );
}
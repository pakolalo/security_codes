import React from 'react';

class ClassState extends React.Component {
    render() {
        return (
            <div>
                <h2>Delete ClassState</h2>
                <p>Please write the security code.</p>
                <div>
                    <input placeholder="Security Code" />
                    <button>Check</button>
                </div>
            </div>
        )
    }
}

export { ClassState };
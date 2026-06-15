import React from 'react';

function UseState({ name }) {
    const [error, setError] = React.useState(false);

    return (
        <div>
            <h2>Delete { name }</h2>
            <p>Please write the security code.</p>
            { error && (
                <p>Error: Invalid security code.</p>
            )}
            <div>
                <input placeholder="Security Code" />
                <button
                onClick={() => setError(!error)}
                >Check</button>
            </div>
        </div>
    );
}

export { UseState };
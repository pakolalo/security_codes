import React from 'react';

function UseState({ name }) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if(loading) {
            setTimeout(() => {
            setLoading(false);
            }, 3000);
        }
    }, [loading]);

    return (
        <div>
            <h2>Delete { name }</h2>
            <p>Please write the security code.</p>
            { error && (
                <p>Error: Invalid security code.</p>
            )}
            { loading && (
                <p>Loading...</p>
            )}
            <div>
                <input placeholder="Security Code" />
                <button
                onClick={() => {
                    setLoading(true);
                }}
                >Check</button>
            </div>
        </div>
    );
}

export { UseState };
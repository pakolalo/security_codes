import React from 'react';

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if(loading) {
            setTimeout(() => {
                if(value !== SECURITY_CODE) {
                    setError(true);
                }
                setLoading(false);
            }, 2000);
        }
    }, [loading]);

    return (
        <div>
            <h2>Delete { name }</h2>
            <p>Please write the security code.</p>
            { (error && !loading) && (
                <p>Error: Invalid security code.</p>
            )}
            { loading && (
                <p>Loading...</p>
            )}
            <div>
                <input 
                placeholder="Security Code" 
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
                />
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
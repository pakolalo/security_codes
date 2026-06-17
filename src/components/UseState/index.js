import React from 'react';

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    })

    React.useEffect(() => {
        if(!!state.loading) {
            setTimeout(() => {
                if(state.value === SECURITY_CODE) {
                    setState({ 
                        ...state,
                        error: false,
                        loading: false,
                        confirmed: true,
                    })
                } else {
                    setState({ 
                        ...state,
                        error: true,
                        loading: false 
                    })
                }
            }, 2000);
        }
    }, [state.loading]);

    if(!state.deleted && !state.confirmed) {
        return (
        <div>
            <h2>Delete { name }</h2>
            <p>Please write the security code.</p>
            {(state.error && !state.loading) && (
                <p>Error: Invalid security code.</p>
            )}
            { state.loading && (
                <p>Loading...</p>
            )}
            <div>
                <input 
                placeholder="Security Code" 
                value={state.value}
                onChange={(event) => {
                    setState({ 
                        ...state,
                        value: event.target.value 
                    })
                }}
                />
                <button
                onClick={() => {
                    setState({ 
                        ...state,
                        loading: true
                    })
                }}
                >Check</button>
            </div>
        </div>
        );
    } else if(state.confirmed && !state.deleted) {
        return(
            <React.Fragment>
                <p>Do you want to proceed?</p>
                <button
                onClick={() => {
                    setState({
                        ...state,
                        value: '',
                        deleted: true
                    })
                }}
                >Delete</button>
                <button
                onClick={() => {
                    setState({
                        ...state,
                        value: '',
                        confirmed: false
                    })
                }}
                >Cancel</button>
            </React.Fragment>
        );
    } else {
        return(
            <React.Fragment>
                <p>Delete success</p>
                <button
                onClick={() => {
                    setState({
                        ...state,
                        value: '',
                        confirmed: false,
                        deleted: false
                    })
                }}
                >Reset</button>
            </React.Fragment>
        );
    }
}

export { UseState };
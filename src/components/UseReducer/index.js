import React from 'react';

const SECURITY_CODE = 'paradigma';

function UseReducer({ name }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        if(!!state.loading) {
            setTimeout(() => {
                if(state.value === SECURITY_CODE) {
                    dispatch({ type: 'CONFIRM' });
                } else {
                    dispatch({ type: 'ERROR' });
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
                    dispatch({ type: 'WRITE', payload: event.target.value });
                    // onWrite(event.target.value);
                }}
                />
                <button
                onClick={() => {
                    dispatch({ type: 'CHECK' });
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
                    dispatch({ type: 'DELETE' });
                }}
                >Delete</button>
                <button
                onClick={() => {
                    dispatch({ type: 'RESET' });
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
                    dispatch({ type: 'RESET' });
                }}
                >Reset</button>
            </React.Fragment>
        );
    }
}

const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
};

const reducerObject = (state, payload) => ({
    'ERROR': {
        ...state,
        error: true,
        loading: false
    },
    'CHECK': {
        ...state,
        loading: true,
    },
    'CONFIRM': {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
    },
    'WRITE': {
        ...state,
        value: payload,
    },
    'DELETE': {
        ...state,
        deleted: true
    },
    'RESET': {
        ...state,
        value: '',
        confirmed: false,
        deleted: false
    }

});

const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type]
    } else {
        return state;
    }
};

export { UseReducer };
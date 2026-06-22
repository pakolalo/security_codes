import React from 'react';

const SECURITY_CODE = 'paradigma';

function UseReducer({ name }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const onConfirm = () => dispatch({ type: actionTypes.confirm });
    const onError = () => dispatch({ type: actionTypes.error });
    const onCheck = () => dispatch({ type: actionTypes.check });
    const onDelete = () => dispatch({ type: actionTypes.delete });
    const onReset = () => dispatch({ type: actionTypes.reset });
    const onWrite = ({ target: {value} }) => {
        dispatch({ type: actionTypes.write, payload: value });
    };

    


    React.useEffect(() => {
        if(!!state.loading) {
            setTimeout(() => {
                if(state.value === SECURITY_CODE) {
                    onConfirm();
                } else {
                    onError();
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
                onChange={onWrite}
                />
                <button onClick={onCheck}>Check</button>
            </div>
        </div>
        );
    } else if(state.confirmed && !state.deleted) {
        return(
            <React.Fragment>
                <p>Do you want to proceed?</p>
                <button onClick={onDelete}>Delete</button>
                <button onClick={onReset}>Cancel</button>
            </React.Fragment>
        );
    } else {
        return(
            <React.Fragment>
                <p>Delete success</p>
                <button onClick={onReset}>Reset</button>
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

const actionTypes = {
    confirm: 'CONFIRM',
    check: 'CHECK',
    error: 'ERROR',
    write: 'WRITE',
    delete: 'DELETE',
    reset: 'RESET',
};

const reducerObject = (state, payload) => ({
    [actionTypes.error]: {
        ...state,
        error: true,
        loading: false
    },
    [actionTypes.check]: {
        ...state,
        loading: true,
    },
    [actionTypes.confirm]: {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
    },
    [actionTypes.write]: {
        ...state,
        value: payload,
    },
    [actionTypes.delete]: {
        ...state,
        deleted: true
    },
    [actionTypes.reset]: {
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
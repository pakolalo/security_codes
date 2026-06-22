import React from 'react';

// Security code constant used for validation
const SECURITY_CODE = 'paradigma';

/**
 * UseReducer component - Demonstrates state management using React.useReducer hook
 * Manages a security code verification flow with a centralized reducer pattern.
 * @param {Object} props - Component props
 * @param {string} props.name - The name to display in the delete confirmation
 * @returns {JSX.Element} The rendered component
 */
function UseReducer({ name }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    // Action dispatchers that trigger state changes through the reducer
    /**
     * Dispatches confirmation action when the correct security code is entered.
     */
    const onConfirm = () => dispatch({ type: actionTypes.confirm });

    /**
     * Dispatches error action when an incorrect security code is entered.
     */
    const onError = () => dispatch({ type: actionTypes.error });

    /**
     * Dispatches check action to initiate security code validation.
     */
    const onCheck = () => dispatch({ type: actionTypes.check });

    /**
     * Dispatches delete action to confirm and complete the deletion process.
     */
    const onDelete = () => dispatch({ type: actionTypes.delete });

    /**
     * Dispatches reset action to restore the component to initial state.
     */
    const onReset = () => dispatch({ type: actionTypes.reset });

    /**
     * Handles input value changes and dispatches the write action.
     * @param {Object} param0 - Event object
     * @param {string} param0.target.value - The new security code value
     */
    const onWrite = ({ target: {value} }) => {
        dispatch({ type: actionTypes.write, payload: value });
    };

    


    /**
     * Effect hook that validates the security code after a 2-second delay when loading is active.
     * Compares the entered value with the security code and dispatches confirm or error action.
     */
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
        <div className="item-container">
            <h2>Delete { name }</h2>
            <p>Please write the security code.</p>
            {(state.error && !state.loading) && (
                <p>Error: Invalid security code.</p>
            )}
            { state.loading && (
                <p>Loading...</p>
            )}
            <div className="input-container">
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
                <div className="item-container">
                    <p>Do you want to proceed?</p>
                    <button onClick={onDelete}>Delete</button>
                    <button onClick={onReset}>Cancel</button>
                </div>
            </React.Fragment>
        );
    } else {
        return(
            <React.Fragment>
                <div className="item-container">
                    <p>Delete success</p>
                    <button onClick={onReset}>Reset</button>
                </div>
            </React.Fragment>
        );
    }
}

/**
 * Initial state object for the reducer.
 * Defines the default values for all state properties.
 */
const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
};

/**
 * Action type constants used to identify different state transitions.
 */
const actionTypes = {
    confirm: 'CONFIRM',
    check: 'CHECK',
    error: 'ERROR',
    write: 'WRITE',
    delete: 'DELETE',
    reset: 'RESET',
};

/**
 * Maps action types to their corresponding state updates.
 * Returns an object where each action type is a key mapping to the updated state.
 * @param {Object} state - Current state object
 * @param {*} payload - Data payload passed with the action
 * @returns {Object} Object containing all possible state transformations
 */
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

/**
 * Reducer function that processes actions and returns updated state.
 * Uses the reducerObject to lookup and apply the appropriate state transformation.
 * @param {Object} state - Current state object
 * @param {Object} action - Action object containing type and optional payload
 * @returns {Object} Updated state or unchanged state if action type doesn't exist
 */
const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type]
    } else {
        return state;
    }
};

export { UseReducer };
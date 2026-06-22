import React from 'react';

// Security code constant used for validation
const SECURITY_CODE = 'paradigma';

/**
 * UseState component - Demonstrates state management using React.useState hook
 * Manages a security code verification flow with input validation and deletion confirmation.
 * @param {Object} props - Component props
 * @param {string} props.name - The name to display in the delete confirmation
 * @returns {JSX.Element} The rendered component
 */
function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    });

    /**
     * Handles confirmation when the correct security code is entered.
     * Sets error to false, loading to false, and confirmed to true.
     */
    const onConfirm = () => {
        setState({ 
            ...state,
            error: false,
            loading: false,
            confirmed: true,
        });
    };

    /**
     * Handles error state when an incorrect security code is entered.
     * Sets error to true and loading to false.
     */
    const onError = () => {
        setState({ 
            ...state,
            error: true,
            loading: false 
        });
    };

    /**
     * Handles input value changes from the security code input field.
     * Updates the state with the new value entered by the user.
     * @param {string} newValue - The new security code value
     */
    const onWrite = (newValue) => {
        setState({ 
            ...state,
            value: newValue, 
        });
    };

    /**
     * Initiates the security code validation process.
     * Sets loading to true which triggers the useEffect hook to verify the code.
     */
    const onCheck = () => {
        setState({ 
            ...state,
            loading: true
        });
    };

    /**
     * Confirms and completes the deletion process.
     * Sets deleted to true.
     */
    const onDelete = () => {
        setState({
            ...state,
            deleted: true
        });
    };

    /**
     * Resets the component state to initial values for a new operation.
     * Clears the input, resets confirmation and deletion flags.
     */
    const onReset = () => {
        setState({
            ...state,
            value: '',
            confirmed: false,
            deleted: false
        });
    };

    /**
     * Effect hook that validates the security code after a 2-second delay when loading is active.
     * Compares the entered value with the security code and calls onConfirm or onError accordingly.
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
                onChange={(event) => {
                    onWrite(event.target.value)
                }}
                />
                <button
                onClick={() => {
                    onCheck();
                }}
                >Check</button>
            </div>
        </div>
        );
    } else if(state.confirmed && !state.deleted) {
        return(
            <React.Fragment>
                <div className="item-container">
                    <p>Do you want to proceed?</p>
                    <button
                    onClick={() => {
                        onDelete();
                    }}
                    >Delete</button>
                    <button
                    onClick={() => {
                        onReset();
                    }}
                    >Cancel</button>
                    </div>
            </React.Fragment>
        );
    } else {
        return(
            <React.Fragment>
                <div className="item-container">
                    <p>Delete success</p>
                    <button
                    onClick={() => {
                        onReset();
                    }}
                    >Reset</button>
                </div>
            </React.Fragment>
        );
    }
}

export { UseState };
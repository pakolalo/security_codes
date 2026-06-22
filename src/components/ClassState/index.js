import React from 'react';
import { Loading } from '../Loading/index';

// Security code constant used for validation
const SECURITY_CODE = 'paradigma';

/**
 * ClassState component - Demonstrates state management using class-based component
 * Manages a security code verification flow using legacy React class component patterns.
 * Includes a Loading child component that displays while validation is in progress.
 */
class ClassState extends React.Component {
    /**
     * Constructor initializes the component state.
     * Sets up initial values for input value, error flag, and loading flag.
     */
    constructor() {
        super();
        this.state = { 
            value: '', 
            error: false, 
            loading: false 
        };
    }

    // UNSAFE_componentWillMount() {}
    // componentDidMount() {}

    /**
     * Lifecycle method called after each component update.
     * Validates the security code after a 2-second delay if loading state is true.
     * Sets error state based on whether the entered code matches the security code.
     */
    componentDidUpdate() {
        if(this.state.loading) {
            setTimeout(() => {
            if (this.state.value === SECURITY_CODE) {
                this.setState({ error: false, loading: false });
            } else {
                this.setState({ error: true, loading: false });
            }
            }, 2000);
        }
    };

    /**
     * Renders the security code verification form.
     * Displays an input field for the security code, a check button,
     * error messages, and a loading component.
     * @returns {JSX.Element} The rendered component JSX
     */
    render() {
        const { error, loading, value } = this.state
        return (
            <div className="item-container">
                <h2>Delete { this.props.name }</h2>
                <p>Please write the security code.</p>
                { loading && (
                    <Loading />
                )}
                { (error && !loading) && (
                    <p>Error: Invalid security code.</p>
                )}
                <div className="input-container">
                    <input 
                    placeholder="Security Code" 
                    value={value}
                    onChange={(event) => {
                        this.setState({ value: event.target.value });
                    }}
                    />
                    <button
                    onClick={() => this.setState({ loading: true})}
                    >Check</button>
                </div>
            </div>
        );
    }
}

export { ClassState };
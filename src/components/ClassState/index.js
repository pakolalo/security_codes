import React from 'react';

class ClassState extends React.Component {
    constructor() {
        super();
        this.state = { error: false }
    }
    render() {
        return (
            <div>
                <h2>Delete { this.props.name }</h2>
                <p>Please write the security code.</p>
                { this.state.error && (
                    <p>Error: Invalid security code.</p>
                )}
                <div>
                    <input placeholder="Security Code" />
                    <button
                    onClick={() => this.setState({ error: !this.state.error})}
                    >Check</button>
                </div>
            </div>
        );
    }
}

export { ClassState };
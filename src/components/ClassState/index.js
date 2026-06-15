import React from 'react';
import { Loading } from '../Loading/index';

class ClassState extends React.Component {
    constructor() {
        super();
        this.state = { error: false, loading: false };
    }

    // UNSAFE_componentWillMount() {

    // };

    // componentDidMount() {

    // };

    componentDidUpdate() {
        if(this.state.loading) {
            setTimeout(() => {
            this.setState({ loading: false });
            }, 3000);
        }
    };

    render() {
        return (
            <div>
                <h2>Delete { this.props.name }</h2>
                <p>Please write the security code.</p>
                { this.state.loading && (
                    <Loading />
                )}
                { this.state.error && (
                    <p>Error: Invalid security code.</p>
                )}
                <div>
                    <input placeholder="Security Code" />
                    <button
                    onClick={() => this.setState({ loading: true})}
                    >Check</button>
                </div>
            </div>
        );
    }
}

export { ClassState };
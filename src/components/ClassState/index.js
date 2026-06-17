import React from 'react';
import { Loading } from '../Loading/index';

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component {
    constructor() {
        super();
        this.state = { 
            value: '', 
            error: false, 
            loading: false 
        };
    }

    // UNSAFE_componentWillMount() {

    // };

    // componentDidMount() {

    // };

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

    render() {
        const { error, loading, value } = this.state
        return (
            <div>
                <h2>Delete { this.props.name }</h2>
                <p>Please write the security code.</p>
                { loading && (
                    <Loading />
                )}
                { (error && !loading) && (
                    <p>Error: Invalid security code.</p>
                )}
                <div>
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
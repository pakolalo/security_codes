import React from 'react';

/**
 * Loading component - Simple loading indicator displayed during security code validation.
 * Uses a class-based component pattern.
 */
class Loading extends React.Component {

    /**
     * Lifecycle method called when the component is being removed from the DOM.
     * Can be used for cleanup operations if needed.
     */
    componentWillUnmount() {
        // Cleanup can be performed here if needed
    };
    
    /**
     * Renders a simple loading message.
     * @returns {JSX.Element} Loading text wrapped in a paragraph element
     */
    render() {
        return (
            <p>Loading...</p>
        );
    }
}

export { Loading };
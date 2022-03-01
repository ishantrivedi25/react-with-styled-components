import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // Update the state so the next render will show the fallback UI.  
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <h1>Something is wrong.</h1>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary;
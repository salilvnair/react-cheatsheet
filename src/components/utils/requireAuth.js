import React from 'react';
import { connect } from 'react-redux';

const requireAuth = (ChildComponent) => {
    class ComposedComponent extends React.Component {

        authenticateAndNavigate() {
            if(!this.props.auth) {
                this.props.history.push('/');
            }
        }
    
        componentDidMount() {
            this.authenticateAndNavigate();
        }
    
        componentDidUpdate() {
            this.authenticateAndNavigate();
        }

        render() {
            return <ChildComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return { auth: state.auth };
    }

    return connect(mapStateToProps)(ComposedComponent);
}

export default requireAuth;
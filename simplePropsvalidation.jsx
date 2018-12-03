import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        return (
            <div>

                <h3>Number: {this.props.propNumber}</h3>
                <h3>String: {this.props.propString}</h3>

            </div>
        );
    }
}



App.defaultProps = {
    propNumber: "shanthi",
    propString: "String value...",
}

App.propTypes = {
    propNumber: PropTypes.number,
    propString: PropTypes.string,
}

export default App;
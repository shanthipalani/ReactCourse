import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h1>{this.props.headerProp}</h1>
                <div>
                    {this.props.contentProp}
                </div>

            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}

App.defaultProps = {
    headerProp: "Header from props...",
    contentProp:"Content from props..."
}
export default App;
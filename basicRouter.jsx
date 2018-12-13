import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
    return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/test" >Test</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route exact path="/test" component={MyComponent} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} />
                </div>
            </Router>
    );
}

function createMarkup() {
    var value = "Shanthi";
    return {__html: '<div>Shanthi </div>' +
        '<h1>Testing page</h1>'
        +'<h2>'+value+'</h2>'
    };
}

function createMarkupSimple() {
    return {__html: 'First &middot; Second'};
}

function MyComponent() {
    return (<div>
            <div dangerouslySetInnerHTML={createMarkupSimple()} />
                <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
        );
}

function Home() {
    return (
            <div>
                <h2>Home</h2>
            </div>
    );
}

function About() {
    return (
            <div>
                <h2>About</h2>
            </div>
    );
}

function Topics({ match }) {
    return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                    </li>
                </ul>

                <Route path={`${match.path}/:topicId`} component={Topic} />
                <Route
                        exact
                        path={match.path}
                        render={() => <h3>Please select a topic.</h3>}
                />
            </div>
    );
}

function Topic({ match }) {
    return (
            <div>
                <h3>{match.params.topicId}</h3>
            </div>
    );
}

export default App;
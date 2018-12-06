/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './findDOMNode.jsx';

ReactDOM.render(<App />, document.getElementById('container'));*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './lifeCycle.jsx';

ReactDOM.render(<App/>, document.getElementById('app'));

setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);
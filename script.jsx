import React from 'react';
import ReactDom from 'react-dom';

class MyComponent extends React.component {
    render(){
        return(
            <h1>Hello Shanthi</h1>
        );
    }
}

ReactDom.render(
    <MyComponent/>,document.getElementById('index');
);
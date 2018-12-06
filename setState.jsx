import React,{Component} from 'react';

class App extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        }
        this.setStateHandler = this.setStateHandler.bind(this);
    };

    setStateHandler() {
        var item = "setState...";
        var item1 = "item 1";
        var myArray = this.state.data.slice();
        myArray.push(item);
        myArray.push(item1);
        console.log(myArray);
        this.setState({data: myArray})
    };

    render() {
        return (
            <div>
                <button onClick = {this.setStateHandler}>SET STATE</button>
                <h4>State Array: {this.state.data}</h4>
            </div>
        );
    }
}
export default App;
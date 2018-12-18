import React, { Component } from 'react';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            loader: false,
            items: null,
            searchValue:""
        };
        this.updateState = this.updateState.bind(this);
        this.fetchAPI = this.fetchAPI.bind(this);
    }

    /*componentDidMount() {
        fetch("https://swapi.co/api/people/?search=Luke")
                .then(res => res.json())
                .then((response) => {
                            console.log(response);
                            this.setState({
                                loader: false,
                                items: response.results
                            });
                        },
                        (error) => {
                        console.log(error);
                            this.setState({
                                loader: false,
                                error
                            });
                        }
                )
    }*/
    updateState(e) {
        this.setState({searchValue: e.target.value});
    }
    fetchAPI(event){
        event.preventDefault();

        this.setState({loader: true});

        var searchVal = this.state.searchValue;

        fetch("https://swapi.co/api/people/?search="+searchVal)
                .then(res => res.json())
                .then((response) => {
                            console.log(response);
                            this.setState({
                                loader: false,
                                items: response
                            });
                        },
                        (error) => {
                            console.log(error);
                            this.setState({
                                loader: false,
                                error
                            });
                        }
                )

    }
    renderResponse(){
        const { error, loader, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (loader) {
            return <div>Loading...</div>;
        } else if(items==null){
            return(<div></div>);
        }else{
            if(items.count>0){
                return (
                        <div>
                            <table className="table">
                                <tbody>
                                {
                                    items.results.map((person, i) => <TableRow key={i} data = {person} />)
                                }
                                </tbody>
                            </table>
                        </div>
                );
            }else{
                return (
                        <div>
                            No matching result found
                        </div>
                );
            }

        }
    }

    render() {

        return(
                <div>
                    <form>
                        <input type="text" name="search" placeholder="Enter search text" onChange = {this.updateState}/>
                        <button className="btn btn-primary" onClick={this.fetchAPI}>Search</button>
                        <div>
                            {this.renderResponse()}
                        </div>
                    </form>
                </div>

        );
        /*const { error, loader, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (loader) {
            return <div>Loading...</div>;
        } else {

            return (
                    <div>
                        {JSON.stringify(items)}
                    </div>
            );
        }*/
    }

}
class TableRow extends Component {
    render() {
        return (
                <tr>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.birth_year}</td>
                    <td>{this.props.data.gender}</td>
                </tr>
        );
    }
}
export default MyComponent;
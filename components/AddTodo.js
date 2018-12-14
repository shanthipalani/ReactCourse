import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {
    render() {
        return (
                <div>
                    <input type = 'text' id='input' className= 'input' />

                    <button onClick = {(e) => this.handleClick(e)}>
                        Add
                    </button>
                </div>
        )
    }
    handleClick(e) {
        //const node = e.target.value;
        const node = document.getElementById('input');
        console.log(node.value);
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }
}
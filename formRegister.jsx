import React from 'react';

function validate(email, username, password) {
    // true means invalid, so our conditions got reversed
    return {
        email: email.length === 0, //true if email is empty
        username: username.length === 0, //true if username is empty
        password: password.length === 0, //true if password is empty
    };
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            username: '',
            password: '',

            touched: {
                email: false,
                username: false,
                password: false,
            },
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

    }

    handleEmailChange(evt) {
        //this.setState({data: e.target.value});
        this.setState({ email: evt.target.value });
        console.log(this.state);
    }

    handleUsernameChange(evt){
        this.setState({ username: evt.target.value });
        console.log(this.state);
    }

    handlePasswordChange(evt){
        this.setState({ password: evt.target.value });
        console.log(this.state);
    }

    /*handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    }*/


    handleSubmit(evt){
        if (!this.canBeSubmitted()) {
            console.log("false");
            evt.preventDefault();
            return;
        }
        const { email, username, password } = this.state;
        alert(`Signed up with email: ${email} password: ${password}`);
        //event.preventDefault();
        //console.log(this.state);

        /*alert('Signed up with email ' +
            this.state.email +
            ', password: ' +
            this.state.password);*/
    }

    canBeSubmitted() {
        const errors = validate(this.state.email, this.state.username, this.state.password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }

    render() {
        const errors = validate(this.state.email, this.state.username, this.state.password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);

        const shouldMarkError = (field) => {
            const hasError = errors[field];
            const shouldShow = this.state.touched[field];

            return hasError ? shouldShow : false;
        };

        return (
            <form >
                <input
                    className={shouldMarkError('email') ? "error" : ""}
                    type="text"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <span className={shouldMarkError('email') ? "error" : "hidden"}
                >invalid email</span>

                <input
                    className={shouldMarkError('username') ? "error" : ""}
                    type="text"
                    placeholder="Enter username"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                />
                <span className={shouldMarkError('username') ? "error" : "hidden"}
                >invalid username</span>


                <input
                    className={shouldMarkError('password') ? "error" : ""}
                    type="password"
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                />
                <span className={shouldMarkError('password') ? "error" : "hidden"}
                >invalid password</span>

                <button disabled={isDisabled} onClick={this.handleSubmit}>Sign up</button>
            </form>
        )
    }
}

export default App;


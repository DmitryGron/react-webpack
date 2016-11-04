import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { withRouter } from 'react-router';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    login() {        
        localStorage.setItem("loggedIn", true);
        this.props.router.push('/app');
    }

    render() {
        return <div>
            <TextField
                hintText="Username"
                floatingLabelText="Username"
                type="text"
                />
            <TextField
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"
                />
            <FlatButton label="Login" onClick={this.login} />
        </div>
    }
};

export default withRouter(Login);

// Login.propTypes = {
//     router: React.PropTypes.shape({
//         push: React.PropTypes.func.isRequired
//     }).isRequired
// };
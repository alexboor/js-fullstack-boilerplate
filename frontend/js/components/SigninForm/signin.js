// @flow
import React, { Component } from 'react';

import './signin.scss';

const classNames = require('classnames');

type Props = {
    // addr: string
}

export default class SigninForm extends Component<Props> {
    props: Props;

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onEmailInput(e) {
        this.setState({email: e.target.value})
    }

    onPasswordInput(e) {
        this.setState({password: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.doLogin(this.state.email, this.state.password, document.getElementById('js-signin').dataset.token);
    }




    render() {
        const { error, isLoading } = this.props.signin;

        return (
            <form className={classNames('ui','form', {'error':error})} onSubmit={::this.onSubmit}>
                <div className="field ">
                    <h3><i className="circular red inverted big key icon"></i></h3>
                </div>
                <div className="field">
                    <input type="text"
                           name="email"
                           placeholder="Email"
                           onInput={::this.onEmailInput}
                    />
                </div>
                <div className="field">
                    <input type="password"
                           name="pwd"
                           placeholder="Password"
                           onInput={::this.onPasswordInput}
                    />
                </div>
                {!!error ?
                    <div className="ui error message">
                        <p>{error.message}</p>
                    </div>
                    : null
                }
                <button className="ui button" type="submit" onSubmit={::this.onSubmit}>Sign in</button>
            </form>
        )
    }

}
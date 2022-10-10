import React from 'react';
import {Redirect} from 'react-router-dom'
import {reduxForm} from 'redux-form'
import {Input, createField} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {logIn} from '../../redux/auth_reducer';
import s from '../common/FormsControls/FormsControls.module.css'
import {Form, Button} from 'react-bootstrap'

const LoginForm = ({handleSubmit, error}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                {createField(Input, "email", [required], "email")}
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                {createField(Input, "password", [required], "password", "password")}
            </Form.Group>

            {error && <span className={s.summaryError}>{error}</span>}

            <Button variant="primary" type="submit">Log in</Button>
        </Form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.logIn(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth === true) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {logIn})(Login)

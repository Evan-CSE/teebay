import React from 'react';
import { Formik } from 'formik';
import './Login.css'
import { Link } from 'react-router-dom';
import isValidMail from '../../CommonHelper/Validator';

export default function Login() {
  return (
    <div className = 'page'>
        <h1>SIGN IN</h1>
        <div>
            <Formik
                initialValues = {{
                    email: '',
                    password: ''
                }}
                validate = {values => {
                    const errors = {
                        email: ''
                    };

                    if (!values.email) {
                    errors.email = 'Required';
                    }
                    else if (!isValidMail(values.email)) {
                    errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit = {(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form className = 'form' onSubmit = {handleSubmit}>
                    <input
                        type        = "email"
                        name        = "email"
                        placeholder = 'example@email.com'
                        onChange    = {handleChange}
                        onBlur      = {handleBlur}
                        value       = {values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    {<br></br>}
                    <input
                        type        = "password"
                        name        = "password"
                        placeholder = 'your password'
                        onChange    = {handleChange}
                        onBlur      = {handleBlur}
                        value       = {values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    {<br></br>}
                    <button type="submit" disabled={isSubmitting}>
                        LOGIN
                    </button>
                    <p>
                        Don't have an account? <Link to = {'/register'}>Signup</Link>
                    </p>
                </form>
            )}
            </Formik>
        </div>
    </div>
  )
}

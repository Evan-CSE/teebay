import React from 'react';
import { Formik } from 'formik';
import './Registration.css'
import { Link } from 'react-router-dom';
import isValidMail from '../CommonHelper/Validator';

export default function Registration() {
  return (
    <div className = 'page'>
        <h1>SIGN UP</h1>
        <div>
            <Formik
                initialValues = {{
                    email      : '',
                    password   : '',
                    firstName  : '',
                    lastName   : '',
                    address    : '',
                    phoneNumber: ''
                }}
                validate = {values => {
                    const errors = {
                        email      : '',
                        firstName  : '',
                        lastName   : '',
                        address    : '',
                        phoneNumber: ''
                    };

                    if (!values.email) {
                    errors.email = 'Required';
                    }
                    
                    else if (!isValidMail(values.email)) {
                    errors.email = 'Invalid email address';
                    }

                    if (!values.firstName)
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
                <form onSubmit = {handleSubmit}>
                    <div style = {{padding: '3px'}}>
                        <input
                            type        = "text"
                            name        = "firstName"
                            placeholder = 'Your first name'
                            onChange    = {handleChange}
                            onBlur      = {handleBlur}
                            value       = {values.firstName}
                        />
                        {errors.firstName && touched.firstName && errors.firstName}
                        <input
                            type        = "text"
                            name        = "lastName"
                            placeholder = 'Your last name'
                            onChange    = {handleChange}
                            onBlur      = {handleBlur}
                            value       = {values.lastName}
                        />
                        {errors.lastName && touched.lastName && errors.lastName}
                    </div>
                    <input
                        type        = "password"
                        name        = "password"
                        placeholder = 'your password'
                        onChange    = {handleChange}
                        onBlur      = {handleBlur}
                        value       = {values.password}
                        style       = {{
                            flex: 1
                        }}
                    />
                    {errors.password && touched.password && errors.password}
                    {<br></br>}
                    <button type="submit" disabled={isSubmitting}>
                        LOGIN
                    </button>
                    <p>
                        Don't have an account? <Link to = {'/'}>Signup</Link>
                    </p>
                </form>
            )}
            </Formik>
        </div>
    </div>
  )
}

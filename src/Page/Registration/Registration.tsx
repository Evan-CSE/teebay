import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import './Registration.css'
import isValidMail from '../../CommonHelper/Validator';

export default function Registration() {
  return (
    <div className = 'page'>
        <h1>SIGN UP</h1>
        <div>
            <Formik
                initialValues = {{
                    email          : '',
                    password       : '',
                    firstName      : '',
                    lastName       : '',
                    address        : '',
                    phoneNumber    : '',
                    confirmPassword: '',
                }}
                validate = {values => {
                    const errors = {
                        email          : '',
                        firstName      : '',
                        lastName       : '',
                        address        : '',
                        phoneNumber    : '',
                        confirmPassword: '',
                        password:       ''
                    };

                    if (!isValidMail(values.email)) {
                        errors.email = 'Invalid email address';
                    }

                    if (!values.firstName) {
                        errors.firstName = 'FirstName: Can not be empty';
                    }

                    if (!values.lastName) {
                        errors.lastName = "LastName: Can not be empty";
                    }

                    if (!values.address) {
                        errors.address = "Address: Cannot be empty";
                    }

                    if (!values.password) {
                        errors.password = "Password must be of 8 characters long";
                    }

                    if (!values.confirmPassword || values.password !== values.confirmPassword) {
                        errors.confirmPassword = "Password didn't match";
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
                <form className = "reg-form" onSubmit = {handleSubmit}>
                    {errors.firstName && touched.firstName && errors.firstName}
                    {<br></br>}
                    {errors.lastName && touched.lastName && errors.lastName}
                    <div className = "form-div">
                        <input
                            type        = "text"
                            name        = "firstName"
                            placeholder = 'First name'
                            onChange    = {handleChange}
                            onBlur      = {handleBlur}
                            value       = {values.firstName}
                            style       = {{display: 'block'}}
                        />
                        <span style = {{marginRight: '10px'}}></span>
                        <input
                            type        = "text"
                            name        = "lastName"
                            placeholder = 'Last name'
                            onChange    = {handleChange}
                            onBlur      = {handleBlur}
                            value       = {values.lastName}
                            style       = {{display: 'block', width: '100%'}}
                        />
                    </div>
                    {errors.address && touched.address && errors.address}
                    {<br></br>}
                   <div className = 'form-div'>
                        <input
                            type        = "text"
                            name        = "address"
                            placeholder = 'Address'
                            onChange    = {handleChange}
                            onBlur      = {handleBlur}
                            value       = {values.address}
                            style       = {{
                                width: '100%'
                            }}
                        />
                   </div>
                   {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                    {<br></br>}
                   <div className = 'form-div'>
                        <input
                            type        = "text"
                            name        = "phoneNumber"
                            placeholder = 'Phone Number'
                            onChange    = {handleChange}
                            onBlur      = {handleBlur}
                            value       = {values.phoneNumber}
                            style       = {{
                                width: '100%'
                            }}
                        />
                   </div>
                   {errors.email && touched.email && errors.email}
                    {<br></br>}
                   <div className = 'form-div'>
                        <input
                            type        = "email"
                            name        = "email"
                            placeholder = 'Email'
                            onChange    = {handleChange}
                            onBlur      = {handleBlur}
                            value       = {values.email}
                            style       = {{
                                width: '100%'
                            }}
                        />
                   </div>
                   {errors.password && touched.password && errors.password}
                    {<br></br>}
                    <div className = 'form-div'>
                        <input
                            type        = "password"
                            name        = "password"
                            placeholder = 'Password'
                            onChange    = {handleChange}
                            onBlur      = {handleBlur}
                            value       = {values.password}
                            style       = {{
                                width: '100%'
                            }}
                        />
                    </div>
                    {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                    {<br></br>}
                    <div className = 'form-div'>
                        <input
                            type        = "password"
                            name        = "confirmPassword"
                            placeholder = 'Confirm Password'
                            onChange    = {handleChange}
                            onBlur      = {handleBlur}
                            value       = {values.confirmPassword}
                            style       = {{
                                width: '100%'
                            }}
                        />
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <button type="submit" disabled={isSubmitting}>
                            REGISTER
                        </button>
                        <p>
                            Already have an account? <Link to = {'/login'}>Sign In</Link>
                        </p>
                    </div>
                </form>
            )}
            </Formik>
        </div>
    </div>
  )
}

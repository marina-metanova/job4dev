import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
    const { userLogin } = useContext(AuthContext);
    const [inputError, setInputError] = useState({});
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        password: '',
        rePass: '',
        company: false,
        logo: '',
    });
    const nav = useNavigate();

    const changeHandler = (e) => {
        if (e.target.type === 'checkbox') {
            setValues(state => ({
                ...state,
                [e.target.name]: e.target.checked
            }))
        } else {
            setValues(state => ({
                ...state,
                [e.target.name]: e.target.value,
            }))
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (values.password !== values.rePass) {
            return;
        }

        authService.register(values)
            .then(authData => {
                setInputError(state => ({
                    ...state,
                    message: authData.message && authData.message,
                }));
                if (!authData.message) {
                    userLogin(authData);
                    nav('/');
                }
            })
            .catch(error => {
                console.log('Register');
            })
    }

    // Validations
    const validateEmailHandler = (e) => {

        const value = e.target.value;
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        
        const validateEmail = regex.test(value);

        setInputError(state => ({
            ...state,
            [e.target.name]: !validateEmail,
        }));
    }

    const validateMinLength = (e, length) => {
        setInputError(state => ({
            ...state,
            [e.target.name]: values[e.target.name].length < length,
        }));
    }
    
    const validRePass = (e) => {
        setInputError(state => ({
            ...state,
            [e.target.name]: e.target.value !== values.password,
        }));
    };

    return (
        <section className="container">
            <div className="text-center">
                <h1 className="h1">Register</h1>
            </div>

            <form className="form-contacts" onSubmit={onSubmit}>
                {inputError.message &&
                    <p className="form-text text-center text-red pb-4"><img src="/img/icons/icon-attention.svg" alt="" /> {inputError.message}</p>
                }
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="fullName">Full name/Company name</label>
                                    <input 
                                        type="text" 
                                        className={!inputError.fullName ? "form-control" : "form-control form-error"} 
                                        name="fullName" 
                                        value={values.fullName} 
                                        onBlur={(e) => validateMinLength(e, 4)} 
                                        onChange={changeHandler} 
                                        placeholder="e.x. John Doe" 
                                    />
                                    {inputError.fullName &&
                                        <small className="form-text"><img src="/img/icons/icon-attention.svg" alt="" /> Full name/Company name should be at least 4 characters long!</small>
                                    }
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Your Email Address</label>
                                    <input 
                                        type="email" 
                                        className={!inputError.email ? "form-control" : "form-control form-error"} 
                                        name="email" 
                                        required
                                        value={values.email} 
                                        onBlur={validateEmailHandler}
                                        onChange={changeHandler} 
                                        placeholder="e.x. jordan@gmail.com" 
                                    />
                                    {inputError.email &&
                                        <small className="form-text"><img src="/img/icons/icon-attention.svg" alt="" /> Invalid email!</small>
                                    }
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="telephone">Your Password</label>
                                    <input 
                                        type="password" 
                                        className={!inputError.password ? "form-control" : "form-control form-error"}  
                                        name="password" 
                                        required
                                        value={values.password} 
                                        onBlur={(e) => validateMinLength(e, 4)} 
                                        onChange={changeHandler} 
                                        placeholder="e.x. *****" 
                                    />
                                    {inputError.password &&
                                        <small className="form-text"><img src="/img/icons/icon-attention.svg" alt="" /> Password should be at least 4 characters long!</small>
                                    }
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="rePass">Re-Password</label>
                                    <input 
                                        type="password" 
                                        className={!inputError.rePass ? "form-control" : "form-control form-error"}  
                                        name="rePass" 
                                        required
                                        value={values.rePass} 
                                        onBlur={validRePass} 
                                        onChange={changeHandler} 
                                        placeholder="e.x. *****" 
                                    />
                                    {inputError.rePass &&
                                        <small className="form-text"><img src="/img/icons/icon-attention.svg" alt="" /> Passwords don't match!</small>
                                    }
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <input 
                                        type="checkbox" 
                                        className="form-check-input" 
                                        name="company" 
                                        checked={values.company} 
                                        onChange={changeHandler} 
                                    />
                                    <label className="form-check-label" htmlFor="company">We are company</label>
                                </div>
                            </div>

                            <div className={values.company ? "col-md-12" : "d-none"}>
                                <div className="form-group">
                                    <label htmlFor="logo">Company logo</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="logo" 
                                        onChange={changeHandler} 
                                        placeholder="e.x. http://..." 
                                    />
                                </div>
                            </div>

                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-blue" disabled={Object.values(inputError).some(x => x)}>Register</button>
                                <small className="d-block pt-5">Already have an account? <Link to={'/login'}>Log in</Link></small>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}
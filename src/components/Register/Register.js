import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
    const { userLogin } = useContext(AuthContext);
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
                userLogin(authData);
                console.log(authData);
                nav('/');
            })
            .catch(error => {
                nav('/404');
            })
    }
    return (
        <section className="container">
            <div className="text-center">
                <h1 className="h1">Register</h1>
            </div>

            <form className="form-contacts" onSubmit={onSubmit}>
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="fullName">Full name/Company name</label>
                                    <input type="text" className="form-control" id="fullName" name="fullName" value={values.fullName} onChange={changeHandler} placeholder="e.x. John Doe" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Your Email Address</label>
                                    <input type="email" className="form-control form-error" id="email" name="email" value={values.email} onChange={changeHandler} placeholder="e.x. jordan@gmail.com" />
                                    <small id="emailHelp" className="form-text"><img src="./public/img/icons/icon-attention.svg" alt="" /> Valid email</small>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="telephone">Your Password</label>
                                    <input type="password" className="form-control" id="password" name="password" value={values.password} onChange={changeHandler} placeholder="e.x. *****" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="rePass">Re-Password</label>
                                    <input type="password" className="form-control" id="rePass" name="rePass" value={values.rePass} onChange={changeHandler} placeholder="e.x. *****" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="checkbox" className="form-check-input" id="company" name="company" checked={values.company} onChange={changeHandler} />
                                    <label className="form-check-label" htmlFor="company">We are company</label>
                                </div>
                            </div>

                            <div className={values.company ? "col-md-12" : "d-none"}>
                                <div className="form-group">
                                    <label htmlFor="logo">Company logo</label>
                                    <input type="text" className="form-control" id="logo" name="logo" onChange={changeHandler} placeholder="e.x. http://..." />
                                </div>
                            </div>

                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-blue">Register</button>
                                <small className="d-block pt-5">Already have an account? <Link to={'/login'}>Log in</Link></small>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}
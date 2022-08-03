import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import { AuthContext } from "../contexts/AuthContext";

export const Register = () => {
    const {userLogin} = useContext(AuthContext);
    const nav = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            fullName,
            email,
            password,
            rePass,
            company,
        } = Object.fromEntries(new FormData(e.target));

        if (password !== rePass) {
            return;
        }
        
        authService.register(
            fullName,
            email,
            password,
            rePass,
            company
        )
            .then(authData => {
                userLogin(authData);
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
                <p>Create stunning, effective sales documents with custom base designed themes, templates, and embedded rich media. It’s easy to create and send professional-looking docs that canbe win every time.</p>
            </div>

            <form className="form-contacts" onSubmit={onSubmit}>
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="fullName">Your Full Name</label>
                                    <input type="text" className="form-control" id="fullName" name="fullName" placeholder="e.x. John Doe" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Your Email Address</label>
                                    <input type="email" className="form-control form-error" id="email" name="email" placeholder="e.x. jordan@gmail.com" />
                                    <small id="emailHelp" className="form-text"><img src="./public/img/icons/icon-attention.svg" alt="" /> Valid email</small>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="telephone">Your Password</label>
                                    <input type="password" className="form-control" id="password" name="password" placeholder="e.x. *****" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="rePass">Re-Password</label>
                                    <input type="password" className="form-control" id="rePass" name="rePass" placeholder="e.x. *****" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="checkbox" className="form-check-input" id="company" name="company" />
                                    <label className="form-check-label" htmlFor="company">We are company</label>
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
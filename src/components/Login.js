import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const nav = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        authService.login(email, password)
            .then(authData => {
                userLogin(authData);
                nav('/');
            })
            .catch(() => {
                nav('/404');
            });
    };

    return (
        <section className="container">
            <div className="text-center">
                <h1 className="h1">Log in</h1>
            </div>

            <form className="form-contacts" onSubmit={onSubmit}>
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Your email</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="e.x. johndoe@gmail.com" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="password">Your password</label>
                                    <input type="password" className="form-control form-error" id="password" name="password" placeholder="e.x. ******" />
                                    <small id="passwordHelp" className="form-text"><img src="./public/img/icons/icon-attention.svg" alt="" /> Valid password</small>
                                </div>
                            </div>

                            <div className="col-12 text-center">
                                <input type="submit" className="btn btn-blue" value='Login' />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}
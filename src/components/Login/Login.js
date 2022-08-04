import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const nav = useNavigate();

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        authService.login(values.email, values.password)
            .then(authData => {
                console.log(authData);
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
                                    <input type="email" className="form-control" id="email" name="email" value={values.email} onChange={changeHandler} placeholder="e.x. johndoe@gmail.com" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="password">Your password</label>
                                    <input type="password" className="form-control form-error" id="password" name="password" value={values.password} onChange={changeHandler} placeholder="e.x. ******" />
                                    <small id="passwordHelp" className="form-text"><img src="./public/img/icons/icon-attention.svg" alt="" /> Valid password</small>
                                </div>
                            </div>

                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-blue">Login</button>
                                <small className="d-block pt-5">Don’t have an account? <Link to={'/register'}>Sign up</Link></small>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}
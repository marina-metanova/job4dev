import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const [inputError, setInputError] = useState({});
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
                setInputError(state => ({
                    ...state,
                    message: authData.message && authData.message,
                }));
                if (!authData.message) {
                    userLogin(authData);
                    nav('/');
                }
            })
            .catch(() => {
                nav('/404');
            });
    };

    const validateEmailHandler = (e) => {

        const value = e.target.value;
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        
        const validateEmail = regex.test(value);

        setInputError(state => ({
            ...state,
            message: false,
            [e.target.name]: !validateEmail,
        }));
    }

    const validateMinLength = (e, length) => {
        setInputError(state => ({
            ...state,
            message: false,
            [e.target.name]: values[e.target.name].length < length,
        }));
    }

    return (
        <section className="container">
            <div className="text-center">
                <h1 className="h1">Log in</h1>
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
                                    <label htmlFor="email">Your email</label>
                                    <input 
                                        type="email" 
                                        className={!inputError.email ? "form-control" : "form-control form-error"} 
                                        name="email" 
                                        required
                                        value={values.email} 
                                        onChange={changeHandler}
                                        onBlur={validateEmailHandler}
                                        placeholder="e.x. johndoe@gmail.com" 
                                    />
                                    {inputError.email &&
                                        <small className="form-text"><img src="/img/icons/icon-attention.svg" alt="" /> Invalid email!</small>
                                    }
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="password">Your password</label>
                                    <input 
                                        type="password" 
                                        className={!inputError.password ? "form-control" : "form-control form-error"}  
                                        name="password" 
                                        required
                                        value={values.password} 
                                        onChange={changeHandler} 
                                        onBlur={(e) => validateMinLength(e, 4)} 
                                        placeholder="e.x. ******" 
                                    />
                                    {inputError.password &&
                                        <small className="form-text"><img src="/img/icons/icon-attention.svg" alt="" /> Password should be at least 4 characters long!</small>
                                    }
                                </div>
                            </div>

                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-blue" disabled={Object.values(inputError).some(x => x)}>Login</button>
                                <small className="d-block pt-5">Don’t have an account? <Link to={'/register'}>Sign up</Link></small>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}
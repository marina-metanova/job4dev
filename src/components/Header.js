import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

export const Header = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <header className="header">
            <div className="container justify-content-between align-items-center d-flex">
                <span className="d-block d-lg-none" id="btn-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>

                <div className="logo">
                    <img src="/img/logo.png" alt="Job4DEV" />
                </div>

                <a href="tel:" id="btn-call" className="d-block d-lg-none">
                    <img src="./public/img/icons/icon-call.svg" alt="" /></a>

                <div className="navbar d-none d-lg-flex">
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/jobs">Jobs</Link>
                        </li>
                        {user.company === 'on'
                            ?   <li className="nav-item">
                                    <Link className="nav-link" to="/add-job">Add job</Link>
                                </li>
                            : ''
                        }
                    </ul>
                    {user.email
                        ?   <div className="d-flex justify-content-between">
                                <Link to="/logout" className="btn btn-light-blue">Logout</Link>
                            </div>
                        :   <div className="d-flex justify-content-between">
                                <Link to="/register" className="btn btn-blue mx-md-3">Register</Link>
                                <Link to="/login" className="btn btn-light-blue">Login</Link>
                            </div>
                    }
                    
                </div>
            </div>
        </header>
    )
}
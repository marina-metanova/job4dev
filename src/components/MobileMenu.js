import { Fragment, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { AuthContext } from '../contexts/AuthContext';
import { MobileMenuContext } from "../contexts/MobileMenuContext";

export const MobileMenu = () => {
    const { user } = useContext(AuthContext);
    const { isOpen, setIsOpen } = useContext(MobileMenuContext);

    const location = useLocation();
    useEffect(() => {
        if(isOpen) {
            setIsOpen(false)
        }
    }, [location]);
    return (
        <div id="mobile-menu" className={isOpen ? "d-block d-lg-none open" : "d-block d-lg-none"}>
            <div className="navbar" data-simplebar>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/jobs">Jobs</Link>
                    </li>
                    {user.company === 'on'
                        ? <li className="nav-item">
                            <Link className="nav-link" to="/add-job">Add Job</Link>
                        </li>
                        : ''
                    }
                    {user.email
                        ? <li className="nav-item">
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </li>
                        : <Fragment>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </Fragment>
                    }
                    
                    
                </ul>
            </div>
            <footer className="menu-footer text-center">
                <img src="/img/logo.png" alt="Job4DEV" />
                <div className="d-flex justify-content-center social-nav">
                    <Link className="nav-link" to="/">
                        <img src="/img/icons/fb.svg" alt="Facebook" />
                    </Link>
                    <Link className="nav-link" to="/">
                        <img src="/img/icons/tw.svg" alt="Tweeter" />
                    </Link>
                    <Link className="nav-link" to="/">
                        <img src="/img/icons/ig.svg" alt="Instagram" />
                    </Link>
                    <Link className="nav-link" to="/">
                        <img src="/img/icons/gl.svg" alt="Google" />
                    </Link>
                    <Link className="nav-link disabled" to="/">
                        <img src="/img/icons/yt.svg" alt="YouTube" />
                    </Link>
                </div>
            </footer>
        </div>
    )
}
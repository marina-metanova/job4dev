import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';
import { MobileMenuContext } from '../contexts/MobileMenuContext';

export const Header = () => {
    const { user } = useContext(AuthContext);
    const { isOpen, setIsOpen } = useContext(MobileMenuContext);

    const openMenu = () => {
        if (isOpen === false) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }

    return (
        <header className="header">
            <div className="container justify-content-between align-items-center d-flex">
                <span className={isOpen ? "d-block d-lg-none open" : "d-block d-lg-none"} id="btn-menu" onClick={openMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>

                <div className="logo">
                    <Link to={'/'}>
                        <img src="/img/logo.png" alt="Job4DEV" />
                    </Link>
                </div>

                <Link to="/" id="btn-call" className="d-block d-lg-none">
                    <img src="/img/icons/icon-call.svg" alt="" /></Link>

                <div className="navbar d-none d-lg-flex">
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </li>
                        {user.company
                            ? <li className="nav-item">
                                <NavLink className="nav-link" to="/add-job">Add job</NavLink>
                            </li>
                            : <li className="nav-item">
                                <NavLink className="nav-link" to="/companies">Companies</NavLink>
                            </li>
                        }
                    </ul>
                    {user.email
                        ? <div className="d-flex justify-content-between">
                            <NavLink to="/logout" className="btn btn-light-blue mx-md-3">Logout</NavLink>
                        </div>
                        : <div className="d-flex justify-content-between">
                            <NavLink to="/register" className="btn btn-blue mx-md-3">Register</NavLink>
                            <NavLink to="/login" className="btn btn-light-blue">Login</NavLink>
                        </div>
                    }

                </div>
            </div>
        </header>
    )
}
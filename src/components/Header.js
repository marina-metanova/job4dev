import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
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
                        <li className="nav-item">
                            <Link className="nav-link" to="/add-job">Add job</Link>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-between">
                        <a href="/register" className="btn btn-blue mx-md-3">Register</a>
                        <a href="/login" className="btn btn-light-blue">Login</a>
                        <a href="/logout" className="btn btn-light-blue">Logout</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
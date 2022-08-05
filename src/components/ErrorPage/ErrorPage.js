import { Link } from "react-router-dom";

import './errorPage.css';

export const ErrorPage = () => {
    return (
        <section className="text-center">
            <h1 className="h1-error">404</h1>
            <p>Page not found!</p>
            <Link to="/">Home Page</Link>
        </section>
    )
}
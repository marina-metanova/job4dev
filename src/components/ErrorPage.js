import { Fragment } from 'react';
import { Link } from "react-router-dom";

export const ErrorPage = () => {
    return (
        <Fragment>

            <section className="position-relative">
               <h1 className="h1">404</h1>
               <p>Page not found!</p>
               <Link to="/">Home Page</Link>
            </section>

        </Fragment>
    )
}
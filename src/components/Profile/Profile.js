import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import { CompanyProfile } from './CompanyProfile';
import { UserProfile } from './UserProfile';


export const Profile = () => {
    const {user} = useContext(AuthContext);

    return (
        <Fragment>
            <div id="breadcrumb">
                <nav aria-label="breadcrumb" className="container">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{user.fullName}</li>
                    </ol>
                </nav>
            </div>


            <section className="container">
                {user.company
                    ? <CompanyProfile user={user} />
                    : <UserProfile user={user} />
                }

                <article className="job-main">

                </article>
            </section>
        </Fragment>
    )
}
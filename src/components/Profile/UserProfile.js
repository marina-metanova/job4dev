import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Services
import * as userAppliesService from '../../services/userAppliesService';

// Components
import { Job } from "../Jobs/Job";

export const UserProfile = ({ user }) => {
    const [applies, setApplies] = useState([]);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const createdDate = new Date(user._createdOn).toLocaleDateString([],options);

    useEffect(() => {
        userAppliesService.getAllApplies()
            .then(result => {
                setApplies(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const userAplies = applies.map(x => x._ownerId == user._id && x);
    console.log(userAplies);

    return (
        <Fragment>
            <div className="job-header">
                <div>
                    <h1 className="h1 mb-2">{user.jobTitle ? user.jobTitle : user.email}</h1>

                    <div className="d-flex align-items-start">
                        <img src="/img/icons/email.svg" width="20px" style={{ marginTop: "2px" }} alt='Email icon' />
                        <div className="mx-2">
                            <h5 className="h5">Email:</h5>
                            <span className="d-block">{user.email}</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-start">
                        <img src="/img/icons/time.svg" width="20px" style={{ marginTop: "2px" }} alt='Time icon' />
                        <div className="mx-2">
                            <h5 className="h5">Created On:</h5>
                            <span className="d-block">{user._createdOn ? createdDate : "-"}</span>
                        </div>
                    </div>
                </div>
            </div>

            <article className="job-main">
                <h2 className="h2">Jobs you applyed for</h2>
                <div className="row jobs-list">
                    {applies?.length > 0
                        ? applies.map(apply => apply._ownerId == user._id && <Link key={apply._id} to={`/jobs/${apply.jobID}`}>{apply.jobTitle}</Link>)
                        : <p className="no-jobs">No job applies yet! </p>
                    }
                </div>
            </article>
        </Fragment>
    )
}
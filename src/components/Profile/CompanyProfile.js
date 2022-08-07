import { Fragment, useContext } from "react";

import { JobContext } from '../../contexts/JobContext';
import { Job } from "../Jobs/Job";

export const CompanyProfile = ({ user }) => {
    const { jobs } = useContext(JobContext);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const createdDate = new Date(user._createdOn).toLocaleDateString([],options);
    const ownerJobs = jobs.filter(job => job._ownerId === user._id && job);
    
    return (
        <Fragment>
            <div className="job-header">
                <div className="job-header">
                    <figure className="job-company-img">
                        <img src={user.logo} alt="gdsfgdf" />
                    </figure>
                    <div className="job-info">
                        <h1 className="h1 mb-2">{user.fullName}</h1>

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
                                <span className="d-block">{createdDate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <article className="job-main">
                <h2 className="h2">Your job offers</h2>
                <div className="row jobs-list">
                    {ownerJobs.length > 0
                        ? ownerJobs.map(job => <Job key={job._id} job={job} />)
                        : <p className="no-jobs">No jobs yet</p>
                    }
                </div>
            </article>
        </Fragment>
    )
}
import { Fragment, useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

import * as jobsService from '../services/jobsService'

export const JobDetails = () => {
    const [job, setJob] = useState({});
    const {jobID} = useParams();
    const {user} = useContext(AuthContext);

    useEffect(() => {
        jobsService.getJob(jobID)
            .then(result => {
                setJob(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <Fragment>
            <div id="breadcrumb">
                <nav aria-label="breadcrumb" className="container">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/jobs">Jobs</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{job.jobTitle}</li>
                    </ol>
                </nav>
            </div>

            <section className="container">
                <div className="job-header">
                    <figure className="job-company-img">
                        <img src={job.logo} alt="gdsfgdf" />
                    </figure>
                    <div className="job-info">
                        <h1 className="h1 mb-2">{job.jobTitle}</h1>
                        <div className="d-block d-md-flex justify-content-between">
                            <div className="jobs-info">
                                <span><img src="/img/icons/job.svg" width="20px" alt='Job icon' /> {job.category}</span>
                                <span><img src="/img/icons/location.svg" width="20px" alt='Location icon' /> {job.city}</span>
                                <span><img src="/img/icons/money.svg" width="20px" alt='Money icon' /> {job.salary}</span>
                            </div>
                            {user._id === job._ownerId
                                ?   <Fragment>
                                        <Link to={`/edit-job/${jobID}`} className="btn btn-blue">Edit Job</Link>
                                        <Link to={`/delete-job/${jobID}`} className="btn btn-blue">Delete Job</Link>
                                    </Fragment>
                                : ""
                            }
                            {user._id && user._id !== job._ownerId
                                ? <Link to="" className="btn btn-blue">Apply Job</Link>
                                : ""
                            }
                        </div>
                    </div>
                </div>

                <article className="job-main">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <h5 className="h5 mb-0">Job Description</h5>
                    </div>

                    <div>
                        <p>{job.description}</p>
                    </div>
                </article>
            </section>
        </Fragment>
    )
}
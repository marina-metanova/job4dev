import { Fragment, useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import * as jobServices from '../../services/jobsService';

import { AuthContext } from '../../contexts/AuthContext';

import './jobDetails.css';

export const JobDetails = () => {
    const [job, setJob] = useState({});
    const {jobID} = useParams();
    const {user} = useContext(AuthContext);

    useEffect(() => {
        jobServices.getJob(jobID)
            .then(result => {
                setJob(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const apllyHandler = () => {
        const apllies = JSON.parse(job.apllies);
        apllies.push(user._id)
        console.log(job);
        
        // const jobData = {
        //     ...job,
        //     apllies
        // }
        // jobServices.apllyForJob(jobID, jobData)
        //     .then(result => {
        //         console.log(result);
        //         editJob(jobID, result);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    }

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
                        <h5 className="h5 mb-2">{job.company}</h5>
                        <div className="d-block d-md-flex justify-content-between">
                            <div className="jobs-info">
                                <span><img src="/img/icons/job.svg" width="20px" alt='Job icon' /> <Link to={`/${(job.category)}`}>{job.category}</Link></span>
                                <span><img src="/img/icons/location.svg" width="20px" alt='Location icon' /> <Link to={`/${(job.city)}`}>{job.city}</Link></span>
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
                                ? <span className="btn btn-blue" onClick={apllyHandler}>Apply Job</span>
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
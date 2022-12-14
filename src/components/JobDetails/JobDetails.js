import { Fragment, useContext, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

// Services
import * as jobServices from '../../services/jobsService';
import * as userAppliesService from '../../services/userAppliesService';

// Contexts
import { AuthContext } from '../../contexts/AuthContext';
import { JobContext } from '../../contexts/JobContext';

import './jobDetails.css';
import { UserProfileApply } from './UserProfileApply';

export const JobDetails = () => {
    const [job, setJob] = useState({});
    const { deleteJob } = useContext(JobContext);
    const [applies, setApplies] = useState([]);
    const { jobID } = useParams();
    const { user } = useContext(AuthContext);
    const nav = useNavigate();

    useEffect(() => {
        userAppliesService.getAllApplies()
            .then(result => {
                setApplies(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    useEffect(() => {
        jobServices.getJob(jobID)
            .then(result => {
                if (!result.message) {
                    setJob(result);
                } else {
                    nav('/errorPage');
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const isAppliyed = applies.some(x => x.jobID === jobID && x._ownerId === user._id);
    const appliedUser = applies.filter(x => x.jobID === jobID && x);

    const applyHandler = (e) => {
        e.preventDefault();
        userAppliesService.createJobApply(
            jobID,
            job.jobTitle,
            { fullName: user.fullName, email: user.email }
        )
            .then(result => {
                setApplies(state => [
                    result,
                    ...state,
                ])
            })
            .catch(error => {
                nav('/errorPage');
            })

    }

    const deleteJobHandler = (e) => {
        const confirmation = window.confirm('Are you shure you want to delete this Job offer?');

        if (confirmation) {
            jobServices.deleteJob(jobID)
                .then(() => {
                    deleteJob(jobID);
                    nav('/jobs')
                })
        }
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
                            {user._id === job._ownerId &&
                                <Fragment>
                                    <Link to={`/edit-job/${jobID}`} className="btn btn-blue">Edit Job</Link>
                                    <button className="btn btn-blue" onClick={deleteJobHandler}>Delete Job</button>
                                </Fragment>
                            }
                            {!isAppliyed && user._id && user._id !== job._ownerId && !user.company &&
                                <button className="btn btn-blue" onClick={applyHandler}>Apply Job</button>
                            }
                            {isAppliyed && user._id && user._id !== job._ownerId &&
                                <button className="btn btn-blue" disabled>Applyed</button>
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

                {user.company &&
                    <section>
                        <h3 className="h3 mb-5">All job applies: {appliedUser.length}</h3>
                        <div className="row jobs-list">
                            {appliedUser.length > 0
                                ? appliedUser.map(job => <UserProfileApply key={job._id} createdOn={job._createdOn} user={job.user} />)
                                : <p className="no-jobs">No job applies yet!</p>
                            }
                        </div>
                    </section>
                }
            </section>
        </Fragment>
    )
}
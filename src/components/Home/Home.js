import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

// Context
import { JobContext } from '../../contexts/JobContext';

import { JobsHome } from './JobsHome';

import './home.css';

export const Home = () => {
    const { jobs } = useContext(JobContext);

    return (
        <Fragment>
            <section className="container position-relative">

                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-5">
                        <h1 className="position-relative">Join us Explore Thousands of Jobs
                            <img src="/img/parallax/sf-12.svg" alt="parallax img" id="el-12" />
                        </h1>
                        <p>Find Jobs, Employment Career Opportunities</p>
                        <div className="d-none d-md-block btn-box">
                            <Link className="btn btn-blue font-weight-bold" to="/jobs">All Jobs</Link>
                        </div>
                    </div>
                    <div className="col-md-7 offset-lg-1">
                        <img src="/img/home/header.png" alt="Title img" width="738px" id="sf-img" />
                        <div className="d-flex d-md-none justify-content-between btn-box">
                            <Link className="btn btn-blue font-weight-bold" to="/jobs">All jobs</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <h3>Featured Jobs</h3>
                <p>Know your worth and find the job that qualify your life</p>

                <div className="features-main d-md-flex justify-content-between">
                    {jobs.length > 0
                        ? jobs.slice(0, 3).map(job => <JobsHome key={job._id} job={job} />)
                        : <p className="no-jobs">No jobs yet</p>
                    }
                </div>
                <div className="btn-box text-center mb-5">
                    <Link className="btn btn-purple" to="/jobs">View all</Link>
                </div>
            </section>

            <section className="funfacts-main position-relative">
                <div className="fb-bg">
                    <img src="/img/home/element-1.png" alt="" />
                    <img src="/img/home/element-2.png" alt="" />
                    <img src="/img/home/element-3.png" alt="" />
                    <img src="/img/home/element-4.png" alt="" />
                    <img src="/img/home/element-5.png" alt="" />
                    <img src="/img/home/element-3.png" alt="" />
                </div>
                <div className="funfacts-box">
                    <div className="funfacts-header">
                        <div>
                            <h3 className="h3"><span className="d-block">We have</span>
                                some awesome funfacts</h3>
                            <p className="d-none d-lg-block">Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                    </div>
                    <div className="funfacts-footer">
                        <div className="statistics d-flex justify-content-between">
                            <div>
                                <span>Job<br />Positions</span>
                                <strong>20+</strong>
                            </div>
                            <div>
                                <span>Top<br />Company</span>
                                <strong>2000+</strong>
                            </div>
                            <div>
                                <span>Job<br />Categories</span>
                                <strong>50+</strong>
                            </div>
                            <div className="d-none d-lg-block">
                                <span>5 stars<br />Ratings</span>
                                <strong>2500+</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
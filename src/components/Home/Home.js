import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import * as jobsServices from '../../services/jobsService';

import { JobsHome } from './JobsHome';

export const Home = () => {

    const jobs = jobsServices.getAllJobs()
        .then(result => {
            return result;
        })
        .catch(error => {
            console.log(error);
        })

    return (
        <Fragment>
            <section className="container position-relative">
                <div className="sf-parallax">
                    <img src="/img/parallax/sf-1.svg" alt="parallax img" id="el-1" data-value="-3" />
                    <img src="/img/parallax/sf-2.svg" alt="parallax img" id="el-2" data-value="5" />
                    <img src="/img/parallax/sf-3.svg" alt="parallax img" id="el-3" data-value="1" />
                    <img src="/img/parallax/sf-4.svg" alt="parallax img" id="el-4" data-value="-1" />
                    <img src="/img/parallax/sf-5.svg" alt="parallax img" id="el-5" data-value="4" />
                    <img src="/img/parallax/sf-6.svg" alt="parallax img" id="el-6" data-value="2" />
                    <img src="/img/parallax/sf-7.svg" alt="parallax img" id="el-7" data-value="-5" />
                    <img src="/img/parallax/sf-8.svg" alt="parallax img" id="el-8" data-value="13" />
                    <img src="/img/parallax/sf-9.svg" alt="parallax img" id="el-9" data-value="3" />
                    <img src="/img/parallax/sf-10.svg" alt="parallax img" id="el-10" data-value="4" />
                    <img src="/img/parallax/sf-11.svg" alt="parallax img" id="el-11" data-value="7" />
                </div>
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
                        ? jobs.map(job => <JobsHome key={job._id} job={job} />)
                        : <p className="no-jobs">No jobs yet</p>
                    }
                    

                    <div className="feature-box text-md-center col">
                        <figure>
                            <img src="/img/companies/atlassian-jira.svg" alt="Logo" />
                        </figure>
                        <div>
                            <h4 className="h4">Finance Manager  Health</h4>
                            <div className="jobs-info">
                                <span><img src="/img/icons/job.svg" width="20px" alt="Social share" /> Design</span>
                                <span><img src="/img/icons/location.svg" width="20px" alt="Social share" /> Varna</span>
                                <span><img src="/img/icons/money.svg" width="20px" alt="Social share" /> 5000-6000</span>
                            </div>
                            <p>As a Product Designer, you will work within a Product Delivery Team fused with.</p>
                            <Link to="/" className="btn btn-blue">Read more</Link>
                        </div>
                    </div>
                    <div className="feature-box text-md-center col">
                        <figure>
                            <img src="/img/companies/slack.svg" alt="" />
                        </figure>
                        <div>
                            <h4 className="h4">Group Marketing Manager</h4>
                            <div className="jobs-info">
                                <span><img src="/img/icons/job.svg" width="20px" alt="Social share" /> Marketing</span>
                                <span><img src="/img/icons/location.svg" width="20px" alt="Social share" /> Plovdiv</span>
                                <span><img src="/img/icons/money.svg" width="20px" alt="Social share" /> 1500-2000</span>
                            </div>
                            <p>As a Product Designer, you will work within a Product Delivery Team fused with.</p>
                            <Link to="/" className="btn btn-blue">Read more</Link>
                        </div>
                    </div>
                </div>
                <div className="btn-box text-center mb-5">
                    <Link className="btn btn-purple" to="/jobs">View all</Link>
                </div>
            </section>

            <section className="container text-center">
                <div>
                    <h3>Top Company Registered</h3>
                    <p>Some of the companies we’ve helped recruit excellent applicants over the years.</p>

                    <div className="companies-main d-flex justify-content-between">
                        <div className="company-box">
                            <img src="../sr/img/companies/atlassian-jira.svg" alt="" />
                        </div>

                        <div className="company-box">
                            <img src="../sr/img/companies/hubSpot.svg" alt="" />
                        </div>

                        <div className="company-box">
                            <img src="../sr/img/companies/mailchimp.svg" alt="" />
                        </div>

                        <div className="company-box">
                            <img src="../sr/img/companies/salesforce.svg" alt="" />
                        </div>

                        <div className="company-box">
                            <img src="../sr/img/companies/shopify.svg" alt="" />
                        </div>

                        <div className="company-box">
                            <img src="../sr/img/companies/slack.svg" alt="" />
                        </div>
                    </div>
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
                    <div className="funfacts-header text-white">
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
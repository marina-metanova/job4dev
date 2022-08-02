import { Fragment } from 'react';

import * as jobServices from '../services/jobsService';

export const AddJob = () => {

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            jobTitle,
            category,
            city,
            salary,
            logo,
            description,
        } = Object.fromEntries(new FormData(e.target));

        jobServices.createJob({
            jobTitle,
            category,
            city,
            salary,
            logo,
            description,
        })
            .then(result => {
                console.log(result);
            })
    }
    return (
        <Fragment>
            <section className="container">
                <div className="text-center">
                    <h1 className="h1">Add New Job</h1>
                </div>

                <form className="form-contacts" onSubmit={onSubmit}>
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="jobTitle">Job Title</label>
                                        <input type="text" className="form-control" id="jobTitle" name="jobTitle" placeholder="e.x. John Doe" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="category">Category</label>
                                        <input type="text" className="form-control form-error" id="category" name="category" placeholder="e.x. Web Design" />
                                        <small id="categoryHelp" className="form-text"><img src="./public/img/icons/icon-attention.svg" alt="" /> Valid</small>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="ciry">City</label>
                                        <input type="text" className="form-control" id="city" name="city" placeholder="e.x. Plovdiv" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="salary">Salary</label>
                                        <input type="text" className="form-control" id="salary" name="salary" placeholder="e.x. 1200" />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="logo">Company Logo</label>
                                        <input type="text" className="form-control" id="logo" name="logo" placeholder="e.x. 1200" />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="description">Job description </label>
                                        <textarea className="form-control" id="description" name="description" placeholder="e.x. Job Description" rows="4"></textarea>
                                    </div>
                                </div>

                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-blue">Add Job</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>

        </Fragment>
    )
}
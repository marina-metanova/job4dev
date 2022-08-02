import { Fragment } from 'react';

export const AddJob = () => {
    return (
        <Fragment>
            <section className="container">
                <div className="text-center">
                    <h1 className="h1">Add New Job</h1>
                </div>

                <form action="" className="form-contacts">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="jobTitle">Job Title</label>
                                        <input type="text" className="form-control" id="jobTitle" placeholder="e.x. John Doe" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="category">Category</label>
                                        <input type="text" className="form-control form-error" id="category" placeholder="e.x. Web Design" />
                                        <small id="categoryHelp" className="form-text"><img src="./public/img/icons/icon-attention.svg" alt="" /> Valid</small>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="ciry">City</label>
                                        <input type="text" className="form-control" id="password" placeholder="e.x. Plovdiv" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="salary">Salary</label>
                                        <input type="text" className="form-control" id="salary" placeholder="e.x. 1200" />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="description">Job description </label>
                                        <textarea className="form-control" id="description" placeholder="e.x. Job Description" rows="4"></textarea>
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
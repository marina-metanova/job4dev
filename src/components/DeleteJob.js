import { Fragment, useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as jobServices from '../services/jobsService';

import { JobContext } from '../contexts/JobContext';

export const EditJob = () => {
    const [job, setJob] = useState({});
    const { editJob } = useContext(JobContext);

    const [values, setValues] = useState({
        jobTitle: '',
        category: '',
        city: '',
        salary: '',
        logo: '',
        description: '',
    });

    const { jobID } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        jobServices.getJob(jobID)
            .then(result => {
                setJob(result);
                setValues({
                    jobTitle: result.jobTitle,
                    category: result.category,
                    city: result.city,
                    salary: result.salary,
                    logo: result.logo,
                    description: result.description,
                })
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        jobServices.editJob(jobID, values)
            .then(result => {
                editJob(jobID, result);
                nav('/jobs');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Fragment>
            <section className="container">
                <div className="text-center">
                    <h1 className="h1">Edit Job</h1>
                </div>

                <form className="form-contacts" onSubmit={onSubmit}>
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="jobTitle">Job Title</label>
                                        <input type="text" className="form-control" id="jobTitle" name="jobTitle" value={values.jobTitle} onChange={changeHandler} />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="category">Category</label>
                                        <input type="text" className="form-control form-error" id="category" name="category" value={values.category} onChange={changeHandler} />
                                        <small id="categoryHelp" className="form-text"><img src="./public/img/icons/icon-attention.svg" alt="" /> Valid</small>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="ciry">City</label>
                                        <input type="text" className="form-control" id="city" name="city" value={values.city} onChange={changeHandler} />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="salary">Salary</label>
                                        <input type="text" className="form-control" id="salary" name="salary" value={values.salary} onChange={changeHandler} />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="logo">Company Logo</label>
                                        <input type="text" className="form-control" id="logo" name="logo" value={values.logo} onChange={changeHandler} />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="description">Job description </label>
                                        <textarea className="form-control" id="description" name="description" value={values.description} rows="4" onChange={changeHandler}></textarea>
                                    </div>
                                </div>

                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-blue">Edit Job</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>

        </Fragment>
    )
}
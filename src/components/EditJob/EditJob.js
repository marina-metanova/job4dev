import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as jobServices from '../../services/jobsService';

import { JobContext } from '../../contexts/JobContext';

export const EditJob = () => {
    const [job, setJob] = useState({});
    const { editJob } = useContext(JobContext);
    const [inputError, setInputError] = useState({});
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

    const validateMinLength = (e, length) => {
        setInputError(state => ({
            ...state,
            [e.target.name]: values[e.target.name].length < length,
        }));
    }

    return (
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
                                    <input type="text" className={!inputError.jobTitle ? "form-control" : "form-control form-error"} name="jobTitle" required value={values.jobTitle} onChange={changeHandler} onBlur={(e) => validateMinLength(e, 4)} />
                                    {inputError.jobTitle &&
                                        <small className="form-text"><img src="/img/icons/icon-attention.svg" alt="" /> Job title should be at least 4 characters long!</small>
                                    }

                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="category">Category</label>
                                    <input type="text" className={!inputError.category ? "form-control" : "form-control form-error"} name="category" required value={values.category} onChange={changeHandler} onBlur={(e) => validateMinLength(e, 2)} />
                                    {inputError.category &&
                                        <small className="form-text"><img src="/img/icons/icon-attention.svg" alt="" /> Job title should be at least 2 characters long!</small>
                                    }
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="ciry">City</label>
                                    <input type="text" className={!inputError.city ? "form-control" : "form-control form-error"} name="city" required value={values.city} onChange={changeHandler} onBlur={(e) => validateMinLength(e, 3)} />
                                    {inputError.city &&
                                        <small className="form-text"><img src="/img/icons/icon-attention.svg" alt="" /> Job title should be at least 3 characters long!</small>
                                    }
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="salary">Salary</label>
                                    <input type="text" className="form-control" name="salary" value={values.salary} onChange={changeHandler} />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="description">Job description </label>
                                    <textarea className={!inputError.description ? "form-control" : "form-control form-error"} name="description" required value={values.description} rows="4" onChange={changeHandler} onBlur={(e) => validateMinLength(e, 60)}></textarea>
                                    {inputError.description &&
                                        <small className="form-text"><img src="/img/icons/icon-attention.svg" alt="" /> Job title should be at least 60 characters long!</small>
                                    }
                                </div>
                            </div>

                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-blue" disabled={Object.values(inputError).some(x => x)}>Edit Job</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}
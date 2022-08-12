import { Fragment, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Job } from './Job';

import { JobContext } from '../../contexts/JobContext';

import './jobs.css';

export const Jobs = () => {
    const { category } = useParams();
    const { jobs } = useContext(JobContext);
    
    return (
        <Fragment>
            <div id="breadcrumb">
                <nav aria-label="breadcrumb" className="container">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Jobs</li>
                    </ol>
                </nav>
            </div>

            <section className="container">
                <h3 className="h3 mb-5">All jobs</h3>

                <div className="row jobs-list">
                    {category
                        ? jobs.length > 0
                            ? jobs.map(job => job.category === category || job.city === category ? <Job key={job._id} job={job} /> : "")
                            : <p className="no-jobs">No jobs yet</p>
                        : jobs.length > 0
                            ? jobs.map(job => <Job key={job._id} job={job} />)
                            : <p className="no-jobs">No jobs yet</p>
                    }
                    
                </div>
        </section>
    </Fragment >
    )
}
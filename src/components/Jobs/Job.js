import { Link } from 'react-router-dom';

export const Job = ({job}) => {
    return (
        <article className="col-sm-6 col-md-4 job-box">
            <figure>
                <img src={job.logo} alt={`${job.jobTitle}`} />
            </figure>
            <div className="job-info">
                <h5 className="h5">{job.jobTitle}</h5>
                <div className="jobs-info">
                    <span><img src="../img/icons/job.svg" width="20px" alt="Social Share" /> {job.category}</span>
                    <span><img src="../img/icons/location.svg" width="20px" alt="Social Share" /> {job.city}</span>
                    <span><img src="../img/icons/money.svg" width="20px" alt="Social Share" /> {job.salary}</span>
                </div>
                <p>As a Product Designer, you will work within a Product Delivery</p>
            </div>
            <Link to={`/jobs/${job._id}`}></Link>
        </article>
    )
}
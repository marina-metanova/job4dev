import { Link } from "react-router-dom";

export const JobsHome = ({job}) => {
    
    return (
        <div className="feature-box text-md-center col">
            <figure>
                <img src={job.logo} alt="Logo" />
            </figure>
            <div>
                <h4 className="h4">{job.jobTitle}</h4>
                <div className="jobs-info">
                    <span><img src="/img/icons/job.svg" width="20px" alt="Social share" /> {job.category}</span>
                    <span><img src="/img/icons/location.svg" width="20px" alt="Social share" /> {job.city}</span>
                    <span><img src="/img/icons/money.svg" width="20px" alt="Social share" /> {job.salary}</span>
                </div>
                <p>{job.title}</p>
                <Link to={`/jobs/${job._id}`} className="btn btn-blue">Read more</Link>
            </div>
        </div>
    )
}
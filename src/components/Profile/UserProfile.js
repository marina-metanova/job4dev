import { Fragment } from "react"

export const UserProfile = ({ user }) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const createdDate = new Date(user._createdOn).toLocaleDateString([],options);
    return (
        <Fragment>
            <div className="job-header">
                <div>
                    <h1 className="h1 mb-2">{user.jobTitle ? user.jobTitle : user.email}</h1>

                    <div className="d-flex align-items-start">
                        <img src="/img/icons/email.svg" width="20px" style={{ marginTop: "2px" }} alt='Email icon' />
                        <div className="mx-2">
                            <h5 className="h5">Email:</h5>
                            <span className="d-block">{user.email}</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-start">
                        <img src="/img/icons/time.svg" width="20px" style={{ marginTop: "2px" }} alt='Time icon' />
                        <div className="mx-2">
                            <h5 className="h5">Created On:</h5>
                            <span className="d-block">{user._createdOn ? createdDate : "-"}</span>
                        </div>
                    </div>
                </div>
            </div>

            <article className="job-main">
                <h2 className="h2">Jobs you apllyed for</h2>
                <div className="row jobs-list">
                    {/* {jobs.length > 0
                        ? jobs.map(job => job._ownerId === user._id ? <Job key={job._id} job={job} /> : "")
                        : <p className="no-jobs">No jobs yet</p>
                    } */}
                </div>
            </article>
        </Fragment>
    )
}
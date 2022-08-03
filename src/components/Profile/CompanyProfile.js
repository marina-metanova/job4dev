export const CompanyProfile = ({ user }) => {
    console.log(user);
    return (
        <div className="job-header">
            <div className="job-header">
                <figure className="job-company-img">
                    <img src={user.logo} alt="gdsfgdf" />
                </figure>
                <div className="job-info">
                    <h1 className="h1 mb-2">{user.fullName}</h1>

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
                            <span className="d-block">{user._createdOn}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
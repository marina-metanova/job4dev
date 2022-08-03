export const UserProfile = ({user}) => {
    return (
        <div className="job-header">
            <div>
                <h1 className="h1 mb-2">{user.jobTitle ? user.jobTitle : user.email}</h1>
                
                <div className="d-flex align-items-start">
                    <img src="/img/icons/email.svg" width="20px" style={{marginTop: "2px"}} alt='Email icon' /> 
                    <div className="mx-2">
                        <h5 className="h5">Email:</h5>
                        <span className="d-block">{user.email}</span>
                    </div>
                </div>
                <div className="d-flex align-items-start">
                    <img src="/img/icons/time.svg" width="20px" style={{marginTop: "2px"}} alt='Time icon' /> 
                    <div className="mx-2">
                        <h5 className="h5">Created On:</h5>
                        <span className="d-block">{user._createdOn ? user._createdOn : "-"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
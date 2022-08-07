

export const UserProfileApply = ({createdOn, user}) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const createdDate = new Date(createdOn).toLocaleDateString([],options);

    return (
        <div className="mb-3">
            <span className="d-block">Full Name: <strong>{user.fullName ? user.fullName : "-"}</strong></span>
            <span className="d-block">Email: <strong>{user.email}</strong></span>
            <span className="d-block">Applied on: <strong>{createdDate}</strong></span>
        </div>
    )
}
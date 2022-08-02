export const Register = () => {
    return (
        <section className="container">
            <div className="text-center">
                <h1 className="h1">Register</h1>
                <p>Create stunning, effective sales documents with custom base designed themes, templates, and embedded rich media. It’s easy to create and send professional-looking docs that canbe win every time.</p>
            </div>

            <form action="" className="form-contacts">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="fullName">Your Full Name</label>
                                    <input type="text" className="form-control" id="fullName" placeholder="e.x. John Doe" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Your Email Address</label>
                                    <input type="email" className="form-control form-error" id="email" placeholder="e.x. jordan@gmail.com" />
                                    <small id="emailHelp" className="form-text"><img src="./public/img/icons/icon-attention.svg" alt="" /> Valid email</small>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="telephone">Your Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="e.x. *****" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="rePass">Re-Password</label>
                                    <input type="password" className="form-control" id="rePass" placeholder="e.x. *****" />
                                </div>
                            </div>

                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-blue">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}
export const Login = () => {
    return (
        <main>
            <section className="container">
                <div className="text-center">
                    <h1 className="h1">Log in</h1>
                </div>

                <form action="" className="form-contacts">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Your email</label>
                                        <input type="email" className="form-control" id="email" placeholder="e.x. johndoe@gmail.com" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="password">Your password</label>
                                        <input type="password" className="form-control form-error" id="password" placeholder="e.x. ******" />
                                        <small id="passwordHelp" className="form-text"><img src="./public/img/icons/icon-attention.svg" alt="" /> Valid password</small>
                                    </div>
                                </div>

                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-blue">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>

        </main>
    )
}
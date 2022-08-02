export const Jobs = () => {
    return (
        <main>
        <div id="breadcrumb">
            <nav aria-label="breadcrumb" className="container">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Jobs</li>
                </ol>
            </nav>
        </div>

        <section className="container">
            <h3 className="h3 mb-5">All jobs</h3>

            <div className="row jobs-list">
                <article className="col-sm-6 col-md-4 job-box">
                    <figure>
                        <img src="./public/img/companies/mailchimp.svg" alt="" />
                    </figure>
                    <div className="job-info">
                        <h5 className="h5">Junior Graphic Designer (Web)</h5>
                        <div className="jobs-info">
                            <span><img src="./public/img/icons/job.svg" width="20px" /> Design</span>
                            <span><img src="./public/img/icons/location.svg" width="20px" /> Plovdiv</span>
                            <span><img src="./public/img/icons/money.svg" width="20px" /> 1500-2000</span>
                        </div>
                        <p>As a Product Designer, you will work within a Product Delivery</p>
                    </div>
                    <a href="job-details.html"></a>
                </article>
                <article className="col-sm-6 col-md-4 job-box">
                    <figure>
                        <img src="./public/img/companies/mailchimp.svg" alt="" />
                    </figure>
                    <div className="job-info">
                        <h5 className="h5">Junior Graphic Designer (Web)</h5>
                        <div className="jobs-info">
                            <span><img src="./public/img/icons/job.svg" width="20px" /> Design</span>
                            <span><img src="./public/img/icons/location.svg" width="20px" /> Plovdiv</span>
                            <span><img src="./public/img/icons/money.svg" width="20px" /> 1500-2000</span>
                        </div>
                        <p className="job-descr">As a Product Designer, you will work within a Product Delivery</p>
                    </div>
                    <a href="job-details.html"></a>
                </article>
            </div>

            <nav>
                <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link page-first" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link active" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link page-last" href="#">Next</a></li>
                </ul>
            </nav>
        </section>
    </main>
    )
}
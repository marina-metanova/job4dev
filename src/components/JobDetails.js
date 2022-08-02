export const JobDetails = () => {
    return (
        <main>
            <div id="breadcrumb">
                <nav aria-label="breadcrumb" className="container">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="">Jobs</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Junior Graphic Designer (Web)</li>
                    </ol>
                </nav>
            </div>

            <section className="container">
                <div className="job-header">
                    <figure className="job-company-img">
                        <img src="./public/img/companies/mailchimp.svg" alt="" />
                    </figure>
                    <div className="job-info">
                        <h1 className="h1 mb-2">Junior Graphic Designer (Web)</h1>
                        <div className="d-block d-md-flex justify-content-between">
                            <div className="jobs-info">
                                <span><img src="./public/img/icons/job.svg" width="20px" /> Design</span>
                                <span><img src="./public/img/icons/location.svg" width="20px" /> Plovdiv</span>
                                <span><img src="./public/img/icons/money.svg" width="20px" /> 1500-2000</span>
                            </div>
                            <a href="" className="btn btn-blue">Apply Job</a>
                        </div>
                    </div>
                </div>

                <article className="job-main">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <h5 className="h5 mb-0">Job Description</h5>
                    </div>

                    <div>
                        <p>As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.</p>
                    </div>
                </article>
            </section>
        </main>
    )
}
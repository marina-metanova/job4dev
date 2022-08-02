import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Jobs = () => {
    return (
        <Fragment>
        <div id="breadcrumb">
            <nav aria-label="breadcrumb" className="container">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
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
                            <span><img src="./public/img/icons/job.svg" width="20px" alt="Social Share" /> Design</span>
                            <span><img src="./public/img/icons/location.svg" width="20px" alt="Social Share" /> Plovdiv</span>
                            <span><img src="./public/img/icons/money.svg" width="20px" alt="Social Share" /> 1500-2000</span>
                        </div>
                        <p>As a Product Designer, you will work within a Product Delivery</p>
                    </div>
                    <Link to="/"></Link>
                </article>
                <article className="col-sm-6 col-md-4 job-box">
                    <figure>
                        <img src="./public/img/companies/mailchimp.svg" alt="" />
                    </figure>
                    <div className="job-info">
                        <h5 className="h5">Junior Graphic Designer (Web)</h5>
                        <div className="jobs-info">
                            <span><img src="./public/img/icons/job.svg" width="20px" alt="Social Share" /> Design</span>
                            <span><img src="./public/img/icons/location.svg" width="20px" alt="Social Share" /> Plovdiv</span>
                            <span><img src="./public/img/icons/money.svg" width="20px" alt="Social Share" /> 1500-2000</span>
                        </div>
                        <p className="job-descr">As a Product Designer, you will work within a Product Delivery</p>
                    </div>
                    <Link to="/"></Link>
                </article>
            </div>

            <nav>
                <ul className="pagination justify-content-center">
                    <li className="page-item"><Link className="page-link page-first" to="/">Previous</Link></li>
                    <li className="page-item"><Link className="page-link active" to="/">1</Link></li>
                    <li className="page-item"><Link className="page-link" to="/">2</Link></li>
                    <li className="page-item"><Link className="page-link" to="/">3</Link></li>
                    <li className="page-item"><Link className="page-link page-last" to="/">Next</Link></li>
                </ul>
            </nav>
        </section>
    </Fragment>
    )
}
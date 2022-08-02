import { Fragment } from 'react';

export const About = () => {
    return (
        <Fragment>
            <div id="breadcrumb">
                <nav aria-label="breadcrumb" className="container">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </nav>
            </div>

            <section className="position-relative">
                <div className="ab-animation">
                    <img src="/img/about/ab-1.svg" id="ab-1" alt="" />
                    <img src="/img/about/ab-2.svg" id="ab-2" alt="" />
                    <img src="/img/about/ab-3.svg" id="ab-3" alt="" />
                    <img src="/img/about/ab-4.svg" id="ab-4" alt="" />
                    <img src="/img/about/ab-5.svg" id="ab-5" alt="" />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="position-relative">About us</h1>
                            <p>Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much.</p>
                            <div className="d-none d-md-block btn-box">
                                <a className="btn btn-purple" href="about-us.html">Read more</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="/img/about/img-make-it-engage.png" alt="" id="sf-img" />
                            <div className="d-block d-md-none justify-content-between btn-box">
                                <a className="btn btn-purple" href="about-us.html">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container text-center">
                <div className="overflow-hidden">
                    <h3>Work with us to get the best services.</h3>
                    <p>Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy.</p>

                    <div className="best-services-img">
                        <img src="/img/about/img-1.png" alt="" />
                        <img src="/img/about/img-2.png" alt="" />
                        <img src="/img/about/img-3.png" alt="" />
                        <img src="/img/about/img-4.png" alt="" />
                        <img src="/img/about/img-5.png" alt="" />
                    </div>

                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="benef-box">
                                <h4 className="h4">4M</h4>
                                <p>4 million daily active users</p>
                            </div>
                        </div>

                        <div className="col-md-4 text-center">
                            <div className="benef-box">
                                <h4 className="h4">12K</h4>
                                <p>Over 12k open job positions</p>
                            </div>
                        </div>

                        <div className="col-md-4 text-center">
                            <div className="benef-box">
                                <h4 className="h4">20M</h4>
                                <p>Over 20 million stories shared</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export const Footer = () => {
    return (
        <footer className="footer container">
            <div className="text-center">
                <img src="/img/logo.png" alt="" />
                <div className="d-flex justify-content-center social-nav">
                    <a className="nav-link" href="#">
                        <img src="/img/icons/fb.svg" alt="" />
                    </a>
                    <a className="nav-link" href="#">
                        <img src="/img/icons/tw.svg" alt="" />
                    </a>
                    <a className="nav-link" href="#">
                        <img src="/img/icons/ig.svg" alt="" />
                    </a>
                    <a className="nav-link" href="#">
                        <img src="/img/icons/gl.svg" alt="" />
                    </a>
                    <a className="nav-link disabled" href="#">
                        <img src="/img/icons/yt.svg" alt="" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
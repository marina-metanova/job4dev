import { useContext } from "react";
import { MobileMenuContext } from "../contexts/MobileMenuContext";

export const MobileMenu = () => {
    const { isOpen } = useContext(MobileMenuContext);
    return (
        <div id="mobile-menu" className={isOpen ? "d-block d-lg-none open" : "d-block d-lg-none"}>
            <div className="navbar" data-simplebar>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Jobs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Add Job</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Register</a>
                    </li>
                </ul>
            </div>
            <footer className="menu-footer text-center">
                <img src="./public/img/logo.png" alt="" />
                    <div className="d-flex justify-content-center social-nav">
                        <a className="nav-link" href="#">
                            <img src="./public/img/icons/fb.svg" alt="" />
                        </a>
                        <a className="nav-link" href="#">
                            <img src="./public/img/icons/tw.svg" alt="" />
                        </a>
                        <a className="nav-link" href="#">
                            <img src="./public/img/icons/ig.svg" alt="" />
                        </a>
                        <a className="nav-link" href="#">
                            <img src="./public/img/icons/gl.svg" alt="" />
                        </a>
                        <a className="nav-link disabled" href="#">
                            <img src="./public/img/icons/yt.svg" alt="" />
                        </a>
                    </div>
            </footer>
        </div>
    )
}
import { useEffect, useState } from "react";

import './scrollToTop.css';

export const ScrollToTop = () => {
    const [isVisible, setVisible] = useState(false);

    const toggleButton = () => {
        if(window.pageYOffset > 720) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleButton);

        return () => {
            window.removeEventListener('scroll', toggleButton);
        }
    }, [])

    return (
        <button onClick={goToTop} id="back-top" className={isVisible ? "show" : ""} title="Go to top"></button>
    )
}
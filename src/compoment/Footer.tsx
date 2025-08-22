import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

export function Footer() {
    return (
        <>
            <div className="line-footer"></div>
            <div className="container-footer">
                <div className="container_logo">
                    <p>Site name</p>
                    <div className="logo-box">
                        <FaFacebook size={20}/>
                        <FaLinkedin size={20}/>
                        <FaYoutube size={20}/>
                        <FaInstagram size={20}/>
                    </div>
                </div>
                <div className="footer-info">
                    <div className="footer-info_page">
                        <p>Topic</p>
                        <a href="#">Page</a>
                        <a href="#">Page</a>
                        <a href="#">Page</a>
                    </div>
                    <div className="footer-info_page">
                        <p>Topic</p>
                        <a href="#">Page</a>
                        <a href="#">Page</a>
                        <a href="#">Page</a>
                    </div>
                    <div className="footer-info_page">
                        <p>Topic</p>
                        <a href="#">Page</a>
                        <a href="#">Page</a>
                        <a href="#">Page</a>
                    </div>
                </div>
            </div>
        </>
    )
}
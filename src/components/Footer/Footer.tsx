import React from "react";
import './style.scss';

class Footer extends React.Component<any, any> {
    render() {
        return (
            <section className={"footer"}>
                <div className="container">
                    <ul>
                        <li>
                            <a
                                href="https://github.com/nodari-dev"
                                target={"_blank"}
                                rel="noreferrer">
                                <img src={process.env.PUBLIC_URL + 'assets/images/svg/github.svg'} alt=""/>
                            </a>
                        </li>
                        <li>
                            <a
                                href={"https://www.linkedin.com/in/nodari-pylypyshak-8a5716206/"}
                                target={"_blank"}
                                rel="noreferrer">
                                <img src={process.env.PUBLIC_URL + 'assets/images/svg/linkedin.svg'} alt=""/>
                            </a>
                        </li>
                        <li>
                            <a
                                href={"https://www.instagram.com/nodaridev/"}
                                target={"_blank"}
                                rel="noreferrer">
                                <img src={process.env.PUBLIC_URL + 'assets/images/svg/instagram.svg'} alt=""/>
                            </a>
                        </li>
                    </ul>
                    <p>nodari.pylypyshak &copy; All rights reserved</p>
                </div>
            </section>
        )
    }
}

export default Footer;
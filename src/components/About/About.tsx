import React from 'react';
import './style.scss';
import content from "../../data/en/about.json";

class About extends React.Component<any, any> {
    render() {
        return(
            <>
                <section className="about">
                    <div className="container">
                        <h1 className={"huge"}>Nodari <br/> Pylypyshak</h1>
                        <img src={content.photo} alt={content.photoAlt}/>
                        <div className="text-container">
                            <p>{content.description}</p>
                        </div>

                        <div className="content">
                            <h2 className={"huge"}>certificates</h2>
                            <ul className={"certificates-list row-3"}>
                                <li className={"grid-el"}>
                                    <img src={process.env.PUBLIC_URL + 'assets/images/jpg/int20h.jpg'} alt="#"/>
                                </li>
                                <li className={"grid-el"}>
                                    <img src={process.env.PUBLIC_URL + 'assets/images/jpg/dev-certificate.jpg'} alt="#"/>
                                </li>
                                <li className={"grid-el"}>
                                    <img src={process.env.PUBLIC_URL + 'assets/images/jpg/wordpress-certificate.jpg'} alt="#"/>
                                </li>
                            </ul>
                        </div>

                        <div className="content">
                            <h2 className={"huge"}>work & education</h2>
                            <ul className={"content-list row-1"}>
                                <li className={"grid-el"}>
                                    <div>
                                        <p><strong>magecloud</strong></p>
                                        <p>shopify/wordpress developer</p>
                                    </div>
                                    <p>2019 - 2021</p>
                                </li>
                                <li className={"grid-el"}>
                                    <div>
                                        <p><strong>Physical Technical Lyceum</strong></p>
                                        <p>student</p>
                                    </div>
                                    <p>2018 - 2021</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default About;
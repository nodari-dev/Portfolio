import React from 'react';
import './style.scss';
import Footer from "../Footer/Footer";

class About extends React.Component<any, any> {
    render() {
        return(
            <>
                <section className="about">
                    <div className="container">
                        <h1 className={"huge"}>Nodari <br/> Pylypyshak</h1>
                        <img src="https://images.unsplash.com/photo-1422564030440-1ecae6e21f67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt=""/>
                        <div className="text-container">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
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
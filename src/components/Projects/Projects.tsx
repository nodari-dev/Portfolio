import React from 'react';
import './style.scss';
import Footer from "../Footer/Footer";

class Projects extends React.Component<any, any> {
    render() {
        return(
            <>
                <section className={"projects"}>
                    <div className={"container"}>
                        <h1>portfolio</h1>
                        <ul className={"portfolio-filter"}>
                            <li><a href="#">javascript</a></li>
                            <li><a href="#">typescript</a></li>
                            <li><a href="#">php</a></li>
                            <li><a href="#">react</a></li>
                            <li><a href="#">wordpress</a></li>
                            <li><a href="#">shopify</a></li>
                        </ul>
                    </div>
                </section>
                <section className={"projects-list"}>
                    <div className={"container"}>
                        <ul className={"row-3"}>
                            <li className={"grid-el"}>
                                <a href="">
                                    <div className={"featured-image"}>
                                        <img src="https://images.pexels.com/photos/6231818/pexels-photo-6231818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                                    </div>
                                    <div className={"text-container"}>
                                        <p><strong>ecospace</strong></p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </a>
                            </li>
                            <li className={"grid-el"}>
                                <a href="">
                                    <div className={"featured-image"}>
                                        <img src="https://images.pexels.com/photos/6231818/pexels-photo-6231818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                                    </div>
                                    <div className={"text-container"}>
                                        <p><strong>ecospace</strong></p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </a>
                            </li>
                            <li className={"grid-el"}>
                                <a href="">
                                    <div className={"featured-image"}>
                                        <img src="https://images.pexels.com/photos/6231818/pexels-photo-6231818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                                    </div>
                                    <div className={"text-container"}>
                                        <p><strong>ecospace</strong></p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}

export default Projects;
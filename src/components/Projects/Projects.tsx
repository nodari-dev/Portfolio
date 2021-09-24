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
                            <li><a href="#">react</a></li>
                            <li><a href="#">wordpress</a></li>
                            <li><a href="#">shopify</a></li>
                        </ul>
                    </div>
                </section>
                <section className={"projects-list"}>
                    <div className={"container"}>
                        <ul className={"row-2-no-margin"}>
                            <li className={"grid-el"} data-tag={"wordpress"}>
                                <a href="">
                                    <div className={"featured-image"}>
                                        <img src="https://images.unsplash.com/photo-1631714777290-d81bbb3ef248?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" alt=""/>
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
                                        <img src="https://images.unsplash.com/photo-1632018844764-8a39386a6a82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" alt=""/>
                                    </div>
                                    <div className={"text-container"}>
                                        <p><strong>ecospace</strong></p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </a>
                            </li>
                            <li className={"grid-el"} data-tag={"wordpress"}>
                                <a href="">
                                    <div className={"featured-image"}>
                                        <img src="https://images.unsplash.com/photo-1630435492646-3864eb4fe197?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
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
                                        <img src="https://images.unsplash.com/photo-1631746165838-e92bb88249d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt=""/>
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
            </>
        )
    }
}

export default Projects;
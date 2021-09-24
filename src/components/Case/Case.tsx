import React from 'react';
import './style.scss';
import Footer from "../Footer/Footer";

class Case extends React.Component<any, any> {
    render() {
        return(
            <>
                <section className="case">
                    <div className="container">
                        <article className="article">
                            <span className={"case-category"}>wordpress theme development</span>
                            <h1>komfortline</h1>
                            <ul className={"case-tech-list"}>
                                <li>Technologies:</li>
                                <li>text, text, text, text</li>
                            </ul>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                            <img src="https://images.pexels.com/photos/6231818/pexels-photo-6231818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>

                        </article>
                        <aside className="sidebar">
                            <ul>
                                <li><span><strong>related projects</strong></span></li>
                                <li><a href="#">Project one</a></li>
                                <li><a href="#">Project one</a></li>
                            </ul>
                        </aside>
                    </div>
                </section>
            </>
        )
    }
}

export default Case;
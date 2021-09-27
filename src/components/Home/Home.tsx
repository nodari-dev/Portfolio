import React from "react";
import './style.scss';

class Home extends React.Component<any, any> {
    render() {
        return(
            <>
                <section className={"home"}>
                    <div className={"container"}>
                        <div className="text-container">
                            <h1>dev.designer</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also</p>
                            <ul className={"tech-list"}>
                                <li>
                                    <img src={process.env.PUBLIC_URL + 'assets/images/svg/javascript.svg'} alt=""/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + 'assets/images/svg/typescript.svg'} alt=""/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + 'assets/images/svg/react.svg'} alt=""/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + 'assets/images/svg/php.svg'} alt=""/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + 'assets/images/svg/wordpress.svg'} alt=""/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + 'assets/images/svg/shopify.svg'} alt=""/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + 'assets/images/svg/sass.svg'} alt=""/>
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + 'assets/images/svg/less.svg'} alt=""/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Home;
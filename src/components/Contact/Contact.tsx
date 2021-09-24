import React from 'react';
import './style.scss'
import Footer from "../Footer/Footer";

class Contact extends React.Component<any, any>{
    render(){
        return(
            <>
                <section className={"contact"}>
                    <div className={"container row-2"}>
                        <div className={"text-container grid-el"}>
                            <div>
                                <h1>say hello!</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                                <a href="mailto:nodari.pylypyshak@gmail.com">nodari.pylypyshak@gmail.com</a>
                            </div>

                        </div>
                        <div className={"image-container grid-el"}>
                            <img src="https://images.unsplash.com/photo-1422564030440-1ecae6e21f67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt=""/>
                        </div>
                    </div>
                </section>
            </>

        )
    }
}

export default Contact;

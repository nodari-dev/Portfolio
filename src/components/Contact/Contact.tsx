import React from 'react';
import './style.scss'
import content from "../../data/en/contact.json";

class Contact extends React.Component<any, any>{
    render(){
        return(
            <>
                <section className={"contact"}>
                    <div className={"container row-2"}>
                        <div className={"text-container grid-el"}>
                            <div>
                                <h1>{content.heading}</h1>
                                <p>{content.paragraph}</p>
                                <a href={"mailto:" + content.email}>{content.email}</a>
                            </div>

                        </div>
                        <div className={"image-container grid-el"}>
                            <img src={content.img} alt={content.alt}/>
                        </div>
                    </div>
                </section>
            </>

        )
    }
}

export default Contact;

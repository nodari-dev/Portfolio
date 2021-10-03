import React from 'react';
import './style.scss';
import content from "../../data/en/404.json";

class NotFound extends React.Component<any, any> {
    render() {
        return(
            <>
                <section className={"not-found"}>
                    <div className={"container"}>
                        <div className="text-container">
                            <h1>{content.heading}</h1>
                            <p>{content.paragraph}</p>
                            <a href={content.link}>{content.linkText}</a>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default NotFound;
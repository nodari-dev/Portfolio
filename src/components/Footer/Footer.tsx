import React from "react";
import './style.scss';
import content from "../../data/en/footer.json";

class Footer extends React.Component<any, any> {

    getSocial = () => {
        return(
            content.social.map((item: any) => (
                <li>
                    <a href={item.link} target={"_blank"} rel="noreferrer">
                        <img src={item.img} alt={item.alt}/>
                    </a>
                </li>
            ))
        )
    }

    render() {
        const social = this.getSocial();
        return (
            <section className={"footer"}>
                <div className="container">
                    <ul>
                        {social}
                    </ul>
                    <p>{content.copyright}</p>
                </div>
            </section>
        )
    }
}

export default Footer;
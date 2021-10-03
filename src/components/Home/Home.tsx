import React from "react";
import './style.scss';
import home from "../../data/en/home.json";

class Home extends React.Component<any, any> {

    techList(){
        let list = home["tech-list"];
        return(
            list.map((item: any) => (
                <li>
                    <img src={item.img} alt={item.alt}/>
                </li>
            )
        ))

    }

    render() {
        return(
            <>
                <section className={"home"}>
                    <div className={"container"}>
                        <div className="text-container">
                            <h1>{home.heading}</h1>
                            <p>{home.description}</p>
                            <ul className={"tech-list"}>
                                {this.techList()}
                            </ul>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Home;
import React from 'react';
import './style.scss';
import Footer from "../Footer/Footer";

class NotFound extends React.Component<any, any> {
    render() {
        return(
            <>
                <section className={"not-found"}>
                    <div className={"container"}>
                        <div className="text-container">
                            <h1>404</h1>
                            <p>this page is missing or you assemble the link incorrectly. don’t worry you can return to browsing just by clicking one of the abowe links.</p>
                            <a href="/">back home</a>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default NotFound;
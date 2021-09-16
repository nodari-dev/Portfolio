import React from "react";
import './style.scss';


class ListSocial extends React.Component<any, any> {
    render() {
        return(
            <ul className={"list-social"}>
                <li><a href="#">instagram</a></li>
                <li><a href="#">linkedin</a></li>
                <li><a href="#">github</a></li>
            </ul>
        )
    }
}

export default ListSocial;
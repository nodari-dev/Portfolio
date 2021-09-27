import React from "react";
import './style.scss';

class ListSocial extends React.Component<any, any> {
    render() {
        return(
            <ul className={"list-social"}>
                <li><a href="https://github.com/nodari-dev" target={"_blank"}>github</a></li>
                <li><a href={"https://www.linkedin.com/in/nodari-pylypyshak-8a5716206/"} target={"_blank"}>linkedin</a></li>
                <li><a href={"https://www.instagram.com/nodaridev/"} target={"_blank"}>instagram</a></li>
            </ul>
        )
    }
}

export default ListSocial;
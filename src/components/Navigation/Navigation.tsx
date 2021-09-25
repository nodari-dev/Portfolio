import React from 'react';
import './style.scss'
import CustomLink from "../CustomLink/CustomLink";
import { Link } from "react-router-dom";

class Navigation extends React.Component<any, any>{
  render(){
    return(
        <section className={'navigation'}>
            <div className="container">
              <Link to="/" className={'logo'}>nodari.</Link>
              <ul>
                  <li><Link to="/work">work</Link></li>
                  <li><Link to="/about">about</Link></li>
                  <li><Link to="/resume">resume</Link></li>
                  <li><CustomLink link='/contact' text="contact me" /></li>
              </ul>
            </div>
        </section>
    )
  }
}

export default Navigation;

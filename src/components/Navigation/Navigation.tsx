import React from 'react';
import './style.scss'
import CustomLink from "../CustomLink/CustomLink";

class Navigation extends React.Component<any, any>{
  render(){
    return(
        <section className={'navigation'}>
          <div className="container">
              <a href="/" className={'logo'}>nodari.</a>
              <ul>
                  <li><a href="/work">work</a></li>
                  <li><a href="/about">about</a></li>
                  <li><a href="/resume">resume</a></li>
                  <li><CustomLink link='/contact' text="contact me" /></li>
              </ul>
          </div>
        </section>
    )
  }
}

export default Navigation;

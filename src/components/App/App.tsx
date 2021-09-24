import React from 'react';
import './style.scss';
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Case from "../Case/Case";
import About from "../About/About";
import NotFound from "../NotFound/NotFound";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

class App extends React.Component<any, any> {
  render() {
    return(
        <>
            <Navigation/>
            <Home/>
            {/*<About />*/}
            <Footer />
        </>
    )
  }
}

export default App;
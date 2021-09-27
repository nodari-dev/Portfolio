import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './style.scss';
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import About from "../About/About";
import NotFound from "../NotFound/NotFound";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Preloader from "../Preloader/Preloader";

class App extends React.Component<any, any> {
  render() {
    return(
        <>
            <Preloader />
            <Router>
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/work" component={Projects} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
            <Footer />
        </>
    )
  }
}

export default App;
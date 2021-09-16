import React from 'react';
import './style.scss';
import Home from "../Home/Home";
import Projects from "../Projects/Projects";

class App extends React.Component<any, any> {
  render() {
    return(
        <>
            <Projects />
            {/*<Home/>*/}
        </>
    )
  }
}

export default App;
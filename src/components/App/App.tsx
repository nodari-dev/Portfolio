import React from 'react';
import './style.scss'
import Navigation from "../Navigation/Navigation";

class App extends React.Component<any, any> {
  render() {
    return(
        <>
          <Navigation/>
          <section>
              <div className={"container"}>

              </div>
          </section>
        </>
    )
  }
}

export default App;

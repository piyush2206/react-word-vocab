import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
const App = () => {
  const navStyle = {
    'backgroundImage': 'linear-gradient(to bottom right, rgb(192, 51, 103), rgba(237, 26, 104, 0.64) 60%, rgb(119, 30, 156))'
  }
  const bmsLogo = "http://2.bp.blogspot.com/-eQyDV0ObVvM/VhVbknpE7uI/AAAAAAAAE5M/c948C4mxRhQ/s1600/logo.png"
  const brandLogoStyle = {
    height: "50px",
    width: "180px"
  }
  return (
    <div>
      <header>
        <nav className="navbar navbar-default" style={navStyle}>
          <div className="container-fluid">
            <div className="navbar-header">
              <img src={bmsLogo} alt="brandLogo" style={brandLogoStyle}/>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
      </main>

    </div>
  )
}

export default App

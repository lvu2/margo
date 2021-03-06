import React from 'react';
import { useState, useEffect } from 'react';
import { About, Home, NotFound, Play, Work, Featured, Signin, Signup, Dashboard } from './containers';
import './App.css';
import { getToken } from './Utils/Common';
//
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  NavLink
} from 'react-router-dom';

const SideNave = (props) => {
  return(
    <div>
      <div className='side-nav-bg' style={{transform: `scaleX(${props.textopacity})`}}></div>
      <div className='side-nav' style={{visibility: `${props.displayvisibility}`, width: `${props.opennav}%`, transitionDelay: `${props.delay}`}}>
        <ul>
          <li><NavLink className="nav-link" activeClassName="selected" style={{opacity: `${props.textopacity}`, transitionDelay: `${props.delay}`}} onClick={props.handleclick} exact to='/'>Home</NavLink></li>
          <li><NavLink className="nav-link" activeClassName="selected" style={{opacity: `${props.textopacity}`, transitionDelay: `${props.delay}`}} onClick={props.handleclick} to='/about'>About</NavLink></li>
          <li><NavLink className="nav-link" activeClassName="selected" style={{opacity: `${props.textopacity}`, transitionDelay: `${props.delay}`}} onClick={props.handleclick} to='/play'>Play</NavLink></li>
          <li><NavLink className="nav-link" activeClassName="selected" style={{opacity: `${props.textopacity}`, transitionDelay: `${props.delay}`}} onClick={props.handleclick} to='/work'>Work</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

const NavButton = () => {
  return(
    <div styleclassName="nav-button">
    </div>
  )
}

function App() {
  const [openNavBar, setOpenNavBar] = useState(false);
  useEffect(() => {
  
  }, [openNavBar])
  ///
  const [navLinkClick, setLinkClick] = useState(false);
  useEffect(() => {
    if( navLinkClick === true) {
      setLinkClick(false);
    }
  })

  const [barsColor, setBarsColor] = useState("white");
  function handleBarsColor(color) {
    setBarsColor(color);    
  }

  function handleClick(e) {
    setOpenNavBar(!openNavBar);
  }

  function handleLinkClick(e) {
    console.log("clicked");
    setLinkClick(true);
    setOpenNavBar(false);
  }

  // handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />}
    />
  )
}

  return (
    /* HashRouter utilizes SPA */
    /* Switch renders first route that matches path */
    // deleted: <Route exact path="/work/featured" component={Featured} />
    <Router>
      <Switch>
        <Route exact path='/about' render={(props) => (
            <About {...props} handleBarsColor={handleBarsColor} />
          )}
        />
        <Route exact path='/' render={(props) => (
            <Home {...props} handleBarsColor={handleBarsColor} />
          )}
        />
        <Route exact path="/404" component={NotFound} />
        <Route exact path='/play' render={(props) => (
            <Play {...props} handleBarsColor={handleBarsColor} />
          )}
        />
        <Route exact path='/work' render={(props) => (
            <Work {...props} handleBarsColor={handleBarsColor} />
          )}
        />
        <Route exact path='/work/:featured' render={(props) => (
            <Featured {...props} handleBarsColor={handleBarsColor} />
          )}
        />
        <Route exact path='/signin' render={(props) => (
            <Signin {...props} handleBarsColor={handleBarsColor} />
          )}
        />
        <Route exact path='/signup' render={(props) => (
            <Signup {...props} handleBarsColor={handleBarsColor} />
          )}
        />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Redirect to="/404" />
      </Switch>

      <SideNave opennav={openNavBar ? '100' : '40'} delay={ openNavBar ? '.3s' : '' } displayvisibility={openNavBar ? 'visible' : 'hidden'}  textopacity={openNavBar ? '1' : '0'} handleclick={handleLinkClick}/>
      <div className={openNavBar ? "nav-button fixed" : "nav-button"} onClick={handleClick}>
        <div style={{backgroundColor: barsColor}} className={openNavBar ? "bar1 change" : "bar1"}></div>
        <div style={{backgroundColor: barsColor}} className={openNavBar ? "bar2 change" : "bar2"}></div>
        <div style={{backgroundColor: barsColor}} className={openNavBar ? "bar3 change" : "bar3"}></div>
      </div>
    </Router>
  );
}

export default App;

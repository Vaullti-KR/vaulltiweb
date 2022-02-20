import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Hero from './views/pages/hero/Hero'
import Login from './views/pages/login/Login'
import Register from './views/pages/register/Register'

// import { useState } from 'react'



// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
// }
 
// Containers

// Pages
// const Login = React.lazy(() => import('./views/pages/login/Login'))
// const Register = React.lazy(() => import('./views/pages/register/Register'))
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
// const Hero = React.lazy(() => import('./views/pages/hero/Hero'))


function App() { 
    return (
      <HashRouter basename={process.env.PUBLIC_URL + '/'}>
          <Switch>
            {/* <Route exact path="/hero" name="Page Hero" render={(props) => <Hero {...props} />} /> */}
            <Route path="/" name="hero" render={(props) => <Hero {...props} />} />
            <Route path="/login" name="Login Page" render={(props) => <Login {...props} />} />
            <Route path="/register" name="Register Page" render={(props) => <Register {...props} />} />
          </Switch>
      </HashRouter>
    )
  //   const token = getToken();

  // if(!token) {
  //   return <Login setToken={setToken} />
  
  // }
  
}

export default App

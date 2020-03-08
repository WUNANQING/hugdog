import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css'
import Home from './pages/Home'
import Header from './components/public/Header'
import ProtectedRoute from './utils/ProtectedRoute'

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
        <Header />
        <div className="container">
          <Switch>
            {/* <Route path="/login">
              <Login
                isAuth={auth}
                login={() => setAuth(true)}
                logout={() => setAuth(false)}
              />
            </Route> */}
            <Route exact path="/">
              <Home />
            </Route>
            <ProtectedRoute exact path="/Home">
              <Home isAuth={auth} />
            </ProtectedRoute>
          </Switch>
        </div>
      </>
    </Router>
  )
}

export default App

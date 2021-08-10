import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { routes } from './routes.js'
import { Topbar } from './cmps/Topbar'

export function App() {
  return (
    <div className="app">
      <Router>
        <Topbar />
        <main className="container">
          <Switch>
              {routes.map(route => <Route key={route.path} component={route.component} path={route.path} />)}
            </Switch>
        </main>
      </Router>
    </div>
  )
}


import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// TODO: Create home styles
// import './home.css'

import Landing from './Landing'
import About from './About'

export default function Home({ match, history }) {
  return (
    <div className='home-component'>
      <Switch>
        <Route path={`${match.url}`} exact component={Landing} />
        <Route path={`${match.url}/about`} exact component={About} />
        <Redirect to={match.url} />
      </Switch>      
    </div>
  )
}


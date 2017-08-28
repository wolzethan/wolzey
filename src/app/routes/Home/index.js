import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// TODO: Create home styles
// import './home.css'

import Landing from './Landing'

export default function Home({ match, history }) {
  return (
    <div className='home-component'>
      <Switch>
        <Route path={`${match.url}`} exact component={Landing} />
        <Redirect to={match.url} />
      </Switch>      
    </div>
  )
}


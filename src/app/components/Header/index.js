import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Appbar from 'material-ui/AppBar';
import * as mui from 'material-ui';
import CodeIcon from 'react-material-icons/icons/action/code'
import './header.css'

const AppbarStyles = getMuiTheme({
    palette: {
      accent1Color: 'white'
    }
});

const iconStyles = {
  height: '40px',
  width: '40px'
}

export default class Header extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={AppbarStyles}>
        <div className='header-component-wrapper'>
          <div className='left-content'>
            <div className='nav-wrapper'>
              <NavLink to='/home' className='no-border'>
                <CodeIcon 
                  color='#FFF' 
                  style={iconStyles}
                />        
              </NavLink>
            </div>
          </div>
          <div className='right-content'>
            <div className='nav-wrapper'>
              <NavLink to='/projects'>Projects</NavLink>              
              <NavLink to='/home'>About</NavLink>
              <NavLink to='/contact'>Contact</NavLink>              
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
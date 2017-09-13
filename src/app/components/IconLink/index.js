import React, { Component } from 'react'
import './iconlink.css'

export default class IconLink extends Component {
  render(){
    return(
      <a href={this.props.href} className='icon-link'>
        <img src={this.props.icon} className='icon-image' alt={this.props.alt} />
      </a>
    )
  }
}
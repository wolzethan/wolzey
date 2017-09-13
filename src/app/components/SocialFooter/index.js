import React, { Component } from 'react'

import IconLink from '../IconLink'

import GithubIcon from './github.png'
import Facebook from './ic_facebook.png'
import Instagram from './ic_instagram.png'

import './footer.css'

export default class SocialFooter extends Component {
  render() {
    return (
      <div className='social-footer-bar'>
        <div className='social-footer-container'>
          <IconLink icon={GithubIcon} href='https://github.com/wolzethan' alt='github' />
          <IconLink icon={Facebook} href='https://facebook.com/ethan.wolz' alt='facebook' />
          <IconLink icon={Instagram} href='https://instagram.com/ethanwolz' alt='instagram' />
        </div>
      </div>
    )
  }
}
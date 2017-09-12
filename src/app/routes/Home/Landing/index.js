import React, { Component } from 'react'
import Typewriter from '../../../components/Typewriter'
import './landing.css'
import BackgroundImg from './sunset.jpg'

export default class Landing extends Component {
  render() {
    const styles = {
      backgroundImage: `url(${BackgroundImg})`
    }

    return (
      <div className='site'>
        <div id='lander-wrapper' style={styles}></div>
        <div className='lander-content'>
          <div className='hero-content'>
            <Typewriter />            
          </div>
          <br />          
        </div>
      </div>
    )
  }
}
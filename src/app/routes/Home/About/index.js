import React, { Component } from 'react'
import './about.css'
import BackgroundImg from './nlights.jpg'

export default class About extends Component {
  render() {
    const styles = {
      backgroundImage: `url(${BackgroundImg})`,
      backgroundAttachment: 'fixed'
    }

    return (
      <div className='site'>
        <div id='lander-wrapper' style={styles}></div>
        <div className='lander-content'>
          <div className='hero-content-1'>
            <h2 className="tk-brandon-grotesque">About Me</h2>
            <h6 className="tk-brandon-grotesque">Fullstack Engineer by day.  Adventurer by night.</h6>
          </div>
        </div>
      </div>
    )
  }
}
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
            <h6 className="tk-brandon-grotesque">Duis cillum nisi ullamco consequat veniam qui Lorem cupidatat non consectetur do irure do Lorem. Culpa reprehenderit aliquip non laborum elit excepteur. Eiusmod veniam enim laboris consectetur esse velit anim esse eiusmod do magna in mollit in.</h6>
          </div>
        </div>
      </div>
    )
  }
}
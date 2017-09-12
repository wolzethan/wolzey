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
            {/* , 360's and --, kick flip and --.  */}
            <h6 className="tk-brandon-grotesque">I was born and raised in Springville, UT. I know what you're already thinking-yes I do make a mean jello salad. I love Javascript... Node, React, Angular etc... and Ruby on Rails... There are two things I loved growing up: wakeboarding and learning about computers. I tantrum in the water and slash on the keyboard. I am happy to take a challenge, so bring it.</h6>
          </div>
        </div>
      </div>
    )
  }
}
import React, { Component } from 'react'
import Instafeed from 'react-instafeed'
// import Insta from '../../../../services/instagramService'

export default class MyInstaFeed extends Component {

  componentWillMount() {
    // Insta.getPhotos(20)
    //   .then((photos) => {
    //     console.log(photos)
    //   })
  }

  render(){
    const instatarget = 'instafeed'
    return (
      <div id={instatarget}>
        <Instafeed
          limit='20'
          resolution='standard_resolution'
          target={instatarget}
          template={`
            <div class="photo-tile">
              <div class="photo" style="background-image:url({{image}});"></div>
            </div>`}
          links={false}
          get='user'
          userId={process.env.REACT_APP_INSTAGRAM_USER_ID}
          accessToken={process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}
        />
      </div>
    )
  }
}
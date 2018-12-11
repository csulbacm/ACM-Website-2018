import React from 'react'
import Grid from '@material-ui/core/Grid'
import Particles from 'react-particles-js';
import OfficerItem from './OfficerItem'
// import fadeInComponent from './FadeInComponent'
import FadeIn from './FadeIn'

const particleParams = {
  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        value_area: 800
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      }
    },
    modes: {
      grab: {
        distance: 200
      }
    }
  }
}
const officers = [

  {
    name: 'Ryan Cole',
    position: 'President',
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2017/master/src//img/board/2017-2018/ryan_cole.JPG',
    github: '#',
    linkedIn: '#'
  },
  {
    name: 'Matt Chu',
    position: 'Vice President',
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2018/master/src/officerImages/matthewChu.jpg',
    github: 'https://github.com/mpchu',
    linkedIn: 'https://www.linkedin.com/in/matthewpchu/'
  },
  {
    name: 'Alfredo Vargas',
    position: 'AESB Rep',
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2017/master/src//img/board/2018-2019/alfredo_vargas.jpg',
    github: '#',
    linkedIn: '#'
  },
  {
    name: 'David Taitingfong',
    position: 'Treasurer',
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2018/master/src/officerImages/davidTaitingfong.jpg',
    github: 'github.com/DJTai',
    linkedIn: 'linkedin.com/in/DavidTaitingfong'
  },
  {
    name: 'Kenny Do',
    position: 'Secretary',
    img: '',
    github: '#',
    linkedIn: '#'
  },
  {
    name: 'Matthew Nguyen',
    position: 'Industry Chair',
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2018/master/src/officerImages/matthewNguyen.jpg',
    github: 'https://github.com/matthewvn25',
    linkedIn: 'https://www.linkedin.com/in/matthew-nguyen-32b18481/'
  },
  {
    name: 'Elizabeth Him',
    position: 'Event Coordinator',
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2018/master/src/officerImages/elizabethHim.jpg',
    github: 'github.com/elizabethhim',
    linkedIn: 'https://www.linkedin.com/in/elizabeth-him/'
  }
]

{/* <Particles params={particleParams} style={{position: "absolute", display: "inline-block", zIndex: "1"}} /> */}

const BulletinPage = () => (
  <div style={{background: "linear-gradient(to bottom, #2196f3, #00a5f7, #00b4f8, #00c1f7, #30cef4)", height: "110%"}}>
      <Particles params={particleParams} style={{position: "absolute", display: "inline-block"}} />

      <FadeIn className='row' groupSize={3} maxGroups={2}>
      {
        officers.map(officer => {
          return (
            <div className='col-xs-4' key={officer.position}>
              <OfficerItem officer={officer}/>
            </div>
          )
        })
      }
      </FadeIn>
    </div>
)

export default BulletinPage

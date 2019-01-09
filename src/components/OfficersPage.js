import React from 'react'
import Grid from '@material-ui/core/Grid'
import Particles from 'react-particles-js';
import OfficerItem from './OfficerItem'
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
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2018/master/images/officerImages/ryan_cole.jpg',
    github: '#',
    linkedIn: '#'
  },
  {
    name: 'Matt Chu',
    position: 'Vice President',
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2018/master/images/officerImages/matthewChu.jpg',
    github: 'https://github.com/mpchu',
    linkedIn: 'https://www.linkedin.com/in/matthewpchu/'
  },
  {
    name: 'Alfredo Vargas',
    position: 'AESB Rep',
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2018/master/images/officerImages/AlfredoVargas.png',
    github: 'https://github.com/alfredovargasjr',
    linkedIn: 'https://www.linkedin.com/in/alfredovargasjr/'
  },
  {
    name: 'Elizabeth Him',
    position: 'Event Coordinator',
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2018/master/images/officerImages/elizabethHim.jpg',
    github: 'github.com/elizabethhim',
    linkedIn: 'https://www.linkedin.com/in/elizabeth-him/'
  },
  {
    name: 'David Taitingfong',
    position: 'Treasurer',
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2018/master/images/officerImages/davidTaitingfong.jpg',
    github: 'github.com/DJTai',
    linkedIn: 'linkedin.com/in/DavidTaitingfong'
  },
  {
    name: 'Kenny Do',
    position: 'Secretary',
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2018/master/images/officerImages/KennyDo.png',
    github: 'https://github.com/mrdokenny',
    linkedIn: 'https://www.linkedin.com/in/dokenny/'
  },
  {
    name: 'Matthew Nguyen',
    position: 'Industry Chair',
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2018/master/images/officerImages/matthewNguyen.jpg',
    github: 'https://github.com/matthewvn25',
    linkedIn: 'https://www.linkedin.com/in/matthew-nguyen-32b18481/'
  },
  {
    name: 'Tiffany Lam',
    position: 'Membership Chair',
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2018/master/images/officerImages/TiffanyLam.png',
    github: 'https://github.com/tiffany-lam',
    linkedIn: 'https://www.linkedin.com/in/tiffany-c-lam/'
  },
  {
    name: 'Evan Key',
    position: 'BeachHacks Chair',
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2018/master/images/officerImages/EvanKey.png',
    github: 'https://github.com/EvanKey'
  }
]

{/* <Particles params={particleParams} style={{position: "absolute", display: "inline-block", zIndex: "1"}} /> */}

const OfficersPage = () => (
  <div style={{background: "linear-gradient(to bottom, #2196f3, #00a5f7, #00b4f8, #00c1f7, #30cef4)", height: "110%"}}>
      <Particles params={particleParams} style={{position: "absolute", display: "inline-block"}} />

      <FadeIn className='row' groupSize={3} maxGroups={2}>
      {
        officers.map(officer => {
          return (
            <div className='col-xs-12 col-sm-6 col-md-4' key={officer.position}>
              <OfficerItem officer={officer}/>
            </div>
          )
        })
      }
      </FadeIn>
    </div>
)

export default OfficersPage

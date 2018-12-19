import React, {Component} from 'react'
import ScheduleDisplay from './ScheduleDisplay.js'
import Grid from '@material-ui/core/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons'
import '../styles/css/HomePage.css'
import Particles from 'react-particles-js';

import MyCarousel from './MyCarousel'
import Parallax from 'react-springy-parallax'

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

class HomePage extends Component {
  render() {
    return (
    <div>
      <div>

        <Parallax style={{background: "linear-gradient(to bottom, #2196f3, #00a5f7, #00b4f8, #00c1f7, #30cef4)"}} ref='parallax' pages={3}>
          <Particles params={particleParams} style={{position: "absolute", display: "inline-block"}} />

          <Parallax.Layer offset={0} speed={1} />
          <Parallax.Layer offset={1} speed={1} />
          <Parallax.Layer offset={2} speed={1} />

          <Parallax.Layer
            offset={0}
            speed={1}>
            <MyCarousel className=""/>
          </Parallax.Layer>


          <Parallax.Layer
            offset={1}
            speed={1}>
            <div style={{textAlign: 'center', paddingBottom: '50px', color: 'white'}}>
              <div style={{display: 'inline-block'}}>
                <h1 style={{textAlign: 'center', fontSize: '48px'}}>What is ACM</h1>
                <p style={{width: '80%', textAlign: 'justify', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.2', fontSize: '20px'}}>
                  ACM is the Association for Computing Machinery. With ACM at the Beach we are determined to advance the science and application 
                  of information technology by providing students with real world information through guest speakers, workshops, seminars, projects,
                  and other activities. Information about job trends, internships, and scholarships is always updated to help students take a stand in their future career.
                </p>
                <p style={{width: '80%', textAlign: 'justify', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.2', fontSize: '20px'}}>
                  We also work to strengthen the bond between the students, the faculty, and the Computer Engineering and Computer Science (CECS) 
                  department. A stronger, tighter relationship students and their instructors engenders a friendly, energetic, close-knit and secure 
                  learning atmosphere. Moreover, we provide services back to the community by tutoring, volunteering, and spreading our knowledge about 
                  the information technology to others.
                </p>
                <p style={{width: '80%', textAlign: 'justify', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.2', fontSize: '20px'}}>
                The Association for Computing Machinery is an active branch of the globe's largest computer science society. Here at the Long 
                Beach chapter, we believe in the principles of Gladwell's book, Outliers: The Story of Success. We commit our time and energy 
                to producing, engaging in, and ultimately mastering the technologies of the computing age.
                </p>


                <p style={{textAlign: 'center', marginTop: '10vh', fontSize: '30px'}}>
                Check out our Instagram and Discord 
                </p>
                <a style={{marginRight:"20px"}} href="https://www.instagram.com/csulbacm/?hl=en">
                    <FontAwesomeIcon icon={faInstagram} size="3x"/>
                </a>
                <a style={{marginRight:"20px"}} href="https://discord.gg/E276dCr">
                    <FontAwesomeIcon icon={faDiscord} size="3x"/>
                </a>
              </div>
            </div>
          </Parallax.Layer>

          <Parallax.Layer
            offset={2}
            speed={1}>
            <div style={{width: '80%', textAlign: 'center'}} className="center">
              <div style={{display: 'inline-block'}}>
                <ScheduleDisplay/>
              </div>
            </div>

          </Parallax.Layer>

        </Parallax>
        <div style={{position: 'absolute', right: '3%', top: '50%'}}>
          <Grid container direction="column" justify="flex-start" alignItems="center">
            <button className="circleButton" onClick={() => this.refs.parallax.scrollTo(0)}></button>
            <button className="circleButton" onClick={() => this.refs.parallax.scrollTo(1)}></button>
            <button className="circleButton" onClick={() => this.refs.parallax.scrollTo(2)}></button>
          </Grid>
        </div>
      </div>
    </div>
    );
  }
}

export default HomePage

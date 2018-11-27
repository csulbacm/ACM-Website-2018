import React from 'react'
import Grid from '@material-ui/core/Grid'
import Particles from 'react-particles-js';
import OfficerItem from './OfficerItem'

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
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2017/master/src//img/board/2017-2018/ryan_cole.JPG'
  },
  {
    name: 'Matt Chu',
    position: 'Vice President',
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2017/master/src//img/board/2018-2019/matt_chu.jpg'
  },
  {
    name: 'Alfredo Vargas',
    position: 'AESB Rep',
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2017/master/src//img/board/2018-2019/alfredo_vargas.jpg'
  },
  {
    name: 'David Taitingfong',
    position: 'Treasurer',
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2017/master/src/img/board/2018-2019/david_taitingfong.jpg'
  },
  {
    name: 'Kenny Do',
    position: 'Secretary',
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2017/master/src/img/board/2018-2019/david_taitingfong.jpg'
  },
  {
    name: 'Matthew Nguyen',
    position: 'Industry Chair',
    image: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2017/master/src/img/board/2018-2019/matthew_nguyen.jpg'
  },
  {
    name: 'Elizabeth Him',
    position: 'Event Coordinator',
    img: 'https://raw.githubusercontent.com/csulbacm/ACM-Website-2017/master/src//img/board/2017-2018/josh_song.JPG'
  }
]

{/* <Particles params={particleParams} style={{position: "absolute", display: "inline-block", zIndex: "1"}} /> */}

const BulletinPage = () => (
    <div id="height-wrapper" style={{background: "linear-gradient(to bottom, #2196f3, #00a5f7, #00b4f8, #00c1f7, #30cef4)", padding: "10px"}}>

      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {
          officers.map(officer => 
            <OfficerItem key={officer.position} officer={officer}/>
          )
        }
        <Grid item xs={4}>
          <div style={{backgroundColor: "#3e4042", height: "400px", width: "200px", opacity: "0.5"}}>
            <div style={{backgroundColor: "white", height: "50px", width: "200px", opacity: "0.5", position: "relative", bottom: "0px"}}>
              Name
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div style={{backgroundColor: "#3e4042", height: "400px", width: "200px", opacity: "0.5"}}>
            <div style={{backgroundColor: "white", height: "50px", width: "200px", opacity: "0.5", position: "relative", bottom: "0px"}}>
              Name
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div style={{backgroundColor: "#3e4042", height: "400px", width: "200px", opacity: "0.5"}}>
            <div style={{backgroundColor: "white", height: "50px", width: "200px", opacity: "0.5", position: "relative", bottom: "0px"}}>
              Name
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div style={{backgroundColor: "#3e4042", height: "400px", width: "200px", opacity: "0.5"}}>
            <div style={{backgroundColor: "white", height: "50px", width: "200px", opacity: "0.5", position: "relative", bottom: "0px"}}>
              Name
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div style={{backgroundColor: "#3e4042", height: "400px", width: "200px", opacity: "0.5"}}>
            <div style={{backgroundColor: "white", height: "50px", width: "200px", opacity: "0.5", position: "relative", bottom: "0px"}}>
              Name
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div style={{backgroundColor: "#3e4042", height: "400px", width: "200px", opacity: "0.5"}}>
            <div style={{backgroundColor: "white", height: "50px", width: "200px", opacity: "0.5", position: "relative", bottom: "0px"}}>
              Name
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
)

export default BulletinPage

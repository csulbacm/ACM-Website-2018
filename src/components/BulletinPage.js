import React from 'react'
import Grid from '@material-ui/core/Grid'
import Particles from 'react-particles-js';

const particleParams = {
  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const BulletinPage = () => (
    <div style={{background: "linear-gradient(to bottom, #2196f3, #00a5f7, #00b4f8, #00c1f7, #30cef4)", height: "100vh"}}>
      <Particles params={particleParams} style={{position: "absolute", display: "inline-block"}} />

      <Grid container direction="row" justify="space-evenly" alignItems="center">
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

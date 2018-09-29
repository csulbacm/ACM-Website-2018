import React, {Component} from 'react'
import ScheduleDisplay from './ScheduleDisplay.js'

const style = {
  headerImage: {
    width: "fill",
    height: "400px",
    backgroundColor: "#dddddd"
  }
}

class HomePage extends Component {
  render() {
    return (
    <div>
      <div style={style.headerImage}>
        Picture Here
      </div>
      <ScheduleDisplay/>
    </div>
    );
  }
}

export default HomePage

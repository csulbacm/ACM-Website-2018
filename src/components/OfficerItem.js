import React from 'react'
import Grid from '@material-ui/core/Grid'

const imgStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
}
const containerStyle ={
    textAlign: "center",
    position: "relative"
}
let hiddenHeaderStyle = {
    position: "absolute",
    backgroundColor: "gray",
    margin: 0,
    padding: 0,
    width: "100%",
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    transition: "0.5s ease-in-out"
}

export default class OfficerItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            height: 0
        }
    }

    onMouseEnter = () => {
        console.log('in');
        this.setState({ ...this.state, height: 100 })
    
        console.log(hiddenHeaderStyle);        
    }
    onMouseLeave = () => {
        console.log('out');
        this.setState({ ...this.state, height: 0 })
    }
    
    render() {
        return (
            <Grid item xs={4}>
                <img src={this.props.officer.image} height="60%" width="60%" style={{...imgStyle}}/>

                <div
                    style={{...containerStyle}}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                >
                    <h1>{this.props.officer.name}</h1>
                    <h2>{this.props.officer.position}</h2>
        
                    <a href="#">
                        <h1 style={{...hiddenHeaderStyle, height:`${this.state.height}%`}}>
                            Check out my GitHub / LinkedIn
                        </h1> 
                    </a>
                </div>
            </Grid>
        )
    }
}
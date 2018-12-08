import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const containerStyle ={
    // textAlign: "center",
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

const styles = {
    card: {
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 345,
        marginTop: '5vh'
    },
    media: {
        backgroundSize: 'cover',
        height: '30vh',
    },
  };

export default class OfficerItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            height: 0
        }

        this.container = React.createRef();
        this.content = React.createRef();
    }

    componentDidMount() {
        // console.log(this.container);
    }

    onMouseEnter = () => {
        this.setState({ ...this.state, height: 100 })
    }
    onMouseLeave = () => {
        this.setState({ ...this.state, height: 0 })
    }
    
    render() {
        return (
            <Card style={{...this.props.style, ...styles.card}} ref={this.container}>
                <CardActionArea ref={this.content}>
                    <CardMedia
                    style={styles.media}
                    image={this.props.officer.image}
                    />
                    <CardContent
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    style={containerStyle}
                    >
                        <Typography variant="h6" component="h2">
                            {this.props.officer.position}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.officer.name} 
                        </Typography>

                        <a href="#">
                            <h1 style={{...hiddenHeaderStyle, height:`${this.state.height}%`}}>
                                Check out my GitHub / LinkedIn
                            </h1> 
                        </a>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}

//<img src={this.props.officer.image} height="60%" width="60%" style={{...imgStyle}}/>
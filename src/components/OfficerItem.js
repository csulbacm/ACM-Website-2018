import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
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

const styles = {
    card: {
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 345,
        marginTop: '5vh'
    },
    media: {
        backgroundSize: 'cover',
        height: '35vh',
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
    
    render() {
        return (
        <div>
            <Card style={{...this.props.style, ...styles.card}} ref={this.container}>
                <CardActionArea ref={this.content}>
                    <CardMedia
                    style={styles.media}
                    image={this.props.officer.image}
                    />
                    <CardContent
                    // onMouseEnter={this.onMouseEnter}
                    // onMouseLeave={this.onMouseLeave}
                    style={containerStyle}
                    >
                        <Typography variant="h6" component="h2">
                            {this.props.officer.position}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.officer.name} 
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <div style={{textAlign: "center", margin: "10px"}}>
                {this.props.officer.github && <a style={{marginRight:"20px"}} href={this.props.officer.github}>
                    <FontAwesomeIcon icon={faGithub} size="3x"/>
                </a>}
                {this.props.officer.linkedIn && <a style={{marginRight:"20px"}} href={this.props.officer.linkedIn}>
                    <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                </a>}
            </div>
        </div>
        )
    }
}

//<img src={this.props.officer.image} height="60%" width="60%" style={{...imgStyle}}/>
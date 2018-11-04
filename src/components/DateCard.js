import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import '../styles/css/WeekCard.css'

const styles = {
    month : {
        marginBottom: 5,
        fontSize: 16,
        textAlign: 'center'
    },
    day : {
        marginTop: 5,
        textAlign: 'center'
    }
}

const months = ['Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class DateCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var month = this.props.month;
        var day = this.props.day;

        return (
            <div className="Date" style={{display: 'inline-block', padding: '12px', color: 'white'}}>
                <p style={styles.month}>{months[month]}</p>
                <Divider/>
                <p style={styles.day} variant="headline" component="h3">{day}</p>
            </div>
        );
    }
}

export default DateCard

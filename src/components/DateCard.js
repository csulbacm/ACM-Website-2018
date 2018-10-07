import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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
        <Card style={{display: 'inline-block'}}>
            <CardContent style={{padding: '12px'}}>
                <Typography style={styles.month}>{months[month]}</Typography>
                <Divider/>
                <Typography style={styles.day} variant="headline" component="h3">{day}</Typography>
            </CardContent>
        </Card>
        );
    }
}

export default DateCard

import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import DateCard from './DateCard.js'
import '../styles/css/WeekCard.css'

class WeekCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var color = this.props.color;
        var date = new Date(this.props.date);
        var title = this.props.title;
        return(
            <Paper style={{backgroundColor: color}} className="Card" elevation={1}>
                <div className="Date">
                    <DateCard className="Date" month={date.getMonth()} day={date.getDate()}/>
                </div>
                <h3 className="Title">{title}</h3>
            </Paper>
        );
    }
}

export default WeekCard
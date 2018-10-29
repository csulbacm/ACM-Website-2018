import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import DateCard from './DateCard.js'
import '../styles/css/WeekCard.css'

class WeekCard extends Component {
    constructor(props) {
        super(props);
    }

    getMinutes(date) {
        if(date.getMinutes()/10 == 0) {
            return date.getMinutes() + "0";
        }
        return date.getMinutes()
    }

    render() {
        var color = this.props.color;
        var date = new Date(this.props.date);
        var title = this.props.title;
        return(
            <Paper style={{backgroundColor: color, height: '150px', width: '200px'}} className="Card" elevation={1}>
                <DateCard className="Date" month={date.getMonth()} day={date.getDate()}/>
                <h3 className="Title">{title}</h3>
                <p className="Time">{date.getHours()%12}:{this.getMinutes(date)}</p>
            </Paper>
        );
    }
}

export default WeekCard

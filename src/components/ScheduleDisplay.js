import React, {Component} from 'react'
import WeekCard from './WeekCard.js'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const a = [
    {
      eventId: 0,
      color: "#f4a142",
      date: '2018-9-28',
      title: "test"
    },
    {
      eventId: 1,
      color: "#f4418f",
      date: '2018-9-29',
      title: "test2"
    }
  ]

class ScheduleDisplay extends Component {
    render() {
        return (
            <Paper style={{width: '95%', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px', marginBottom: '15px', padding: '10px'}} elevation={2}>
                <h2 style={{margin: '2px'}}>Events This Week</h2>
                <Grid container direction="row" justify="flex-start" alignItems="stretch">
                    {a.map(i => {
                        return (
                            <WeekCard key={i.eventId} color={i.color} date={i.date} title={i.title}></WeekCard>
                        );
                    })}
                    <WeekCard color="#dddddd" date="9/30/2018" title="test3"></WeekCard>
                </Grid>
            </Paper>
        )
    }
}

export default ScheduleDisplay
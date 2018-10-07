import React, {Component} from 'react'
import { connect } from 'react-redux'
import selectScheduleCards from '../selectors/scheduleCards'
import { startAddScheduleCard } from '../actions/scheduleCards'
import ScheduleCardForm from './ScheduleCardForm'

import WeekCard from './WeekCard.js'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

// const a = [
//     {
//       eventId: 0,
//       color: "#f4a142",
//       date: '2018-9-28',
//       title: "test"
//     },
//     {
//       eventId: 1,
//       color: "#f4418f",
//       date: '2018-9-29',
//       title: "test2"
//     }
//   ]

const ScheduleDisplay = (props) => {
        return (
          <div>
            <Paper style={{width: '95%', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px', marginBottom: '15px', padding: '10px'}} elevation={2}>
                <h2 style={{margin: '2px'}}>Events This Week</h2>
                <Grid container direction="row" justify="flex-start" alignItems="stretch">
                    {props.scheduleCards.map(card => (
                      <WeekCard key={card.id} color={card.color} date={card.date} title={card.title}></WeekCard>
                    ))}
                    <WeekCard color="#dddddd" date="9/30/2018" title="test3"></WeekCard>

                    <ScheduleCardForm
                      onSubmit={(scheduleCard) => {
                        props.dispatch(startAddScheduleCard(scheduleCard))
                      }}
                    />
                </Grid>
            </Paper>
          </div>
        )
    }

const mapStateToProps = (state) => {
  console.log(selectScheduleCards(state));
  return {
    scheduleCards: selectScheduleCards(state)
  }
}

export default connect(mapStateToProps)(ScheduleDisplay)

import React, {Component} from 'react'
import { connect } from 'react-redux'
import selectScheduleCards from '../selectors/scheduleCards'
import { startAddScheduleCard } from '../actions/scheduleCards'
import ScheduleCardForm from './ScheduleCardForm'

import WeekCard from './WeekCard.js'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const ScheduleDisplay = (props) => {
        return (
            <Paper style={{ marginLeft: 'auto', marginTop: '15px', marginBottom: '25px', height: '100%'}} elevation={2}>
                <h2 style={{textAlign: 'center'}}>Events This Week</h2>
                <Grid container direction="row" justify="flex-start" alignItems="center">
                    
                      {props.scheduleCards.map(card => (
                        <Grid item key={card.id}>
                          <WeekCard key={card.id} color={card.color} date={card.date} title={card.title}></WeekCard>
                        </Grid>
                      ))}
                    
                    {/* <ScheduleCardForm
                      onSubmit={(scheduleCard) => {
                        props.dispatch(startAddScheduleCard(scheduleCard))
                      }}
                    /> */}
                </Grid>
            </Paper>
        )
    }

const mapStateToProps = (state) => {
  console.log(selectScheduleCards(state));
  return {
    scheduleCards: selectScheduleCards(state)
  }
}

export default connect(mapStateToProps)(ScheduleDisplay)

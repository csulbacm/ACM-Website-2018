import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

export default class ScheduleCardForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      color: props.scheduleCard ? props.scheduleCard.color : "#66ccff",
      date: props.scheduleCard ? moment(props.scheduleCard.date) : moment(),
      title: props.scheduleCard ? props.scheduleCard.title : '',
      focused: false,
      error: ''
    }
  }

  onTitleChange = (e) => {
    const title = e.target.value
    this.setState(() => ({ title }))
  }
  onDateChange = (date) => {
    if(date){
      this.setState(() => ({ date }))
    }
  }
  onColorChange = (e) => {
    const color = e.target.value
    this.setState(() => ({ color }))
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ focused }))
  }

  onSubmit = (e) => {
    e.preventDefault()

    if(!this.state.title){
      this.setState(() => ({ error: 'Please inlude a Title for the event!' }))
    }else{
      this.setState(() => ({ error: '' }))
      const val = {
        date: this.state.date.valueOf(),
        title: this.state.title,
        color: this.state.color
      }
      this.props.onSubmit(val)
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}

        <form onSubmit={this.onSubmit}>
          <SingleDatePicker
            displayFormat="MMM Do"
            date={this.state.date}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
          />
          <input
            type="text"
            placeholder="Title"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <input
            type="color"
            name="color-picker"
            value={this.state.color}
            onChange={this.onColorChange}
          />

          <input type="submit"/>
        </form>
      </div>
    )
  }
}

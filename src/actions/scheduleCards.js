import database from '../firebase/firebase'
import axios from 'axios'
import moment from 'moment'

const addScheduleCard = (scheduleCard) => ({
  type: 'ADD_SCHEDULE_CARD',
  scheduleCard
})
export const startAddScheduleCard = (data = {}) => {
  console.log('in');
  return (dispatch) => {
    const {
      date,
      title,
      color
    } = data
    const scheduleCard = { date, title, color }

    database.ref('scheduleCards').push(scheduleCard)
      .then((ref) => {
        dispatch(addScheduleCard({
          id: ref.key,
          ...scheduleCard
        }))
      })
  }
}

const setScheduleCards = (scheduleCards) => ({
  type: 'SET_SCHEDULE_CARDS',
  scheduleCards
})
export const startSetScheduleCards = () => {
  return (dispatch) => {
    const currentDate = moment().get('year') + "-" + (moment().get('month')+1) + "-" + moment().get('date') + "T00%3A00%3A00-00%3A00";
    const calendarID = "csulb.acm.org_74d29bp7hmo68gfsnc47cl420o@group.calendar.google.com";

    return axios.get('https://www.googleapis.com/calendar/v3/calendars/'+calendarID+'/events?timeMin='+currentDate+'&key=AIzaSyAHAUCcBOMbIhUmJsIr0ET4bxxJEaaa2cQ')
      .then((res) => {
        const scheduleCards = [];

        console.log(res.data.items);

        res.data.items.forEach((childSnapshot) => {
          scheduleCards.push(
            {
              id: childSnapshot.id,
              color: "#66ccff",
              date: childSnapshot.start.dateTime,
              title: childSnapshot.summary
            })
        })

        dispatch(setScheduleCards(scheduleCards))
      })

    return database.ref('scheduleCards').once('value')
      .then((snapshot) => {
        const scheduleCards = []

        snapshot.forEach((childSnapshot) => {
          scheduleCards.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        })

        dispatch(setScheduleCards(scheduleCards))
      })
    }

  }

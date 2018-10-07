import database from '../firebase/firebase'

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

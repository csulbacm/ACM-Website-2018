import moment from 'moment'

export default (scheduleCards) => {
  let schedule = scheduleCards
                  .filter((card) => moment(card.date, "Day").isSameOrAfter(moment("Day")))
                  .sort((a, b) => a.date <= b.date ? -1 : 1)

  return schedule
}

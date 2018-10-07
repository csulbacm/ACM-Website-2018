import moment from 'moment'

export default (scheduleCards) => {
  let schedule = scheduleCards
                  .filter((card) => card.date >= moment().startOf('day').valueOf())
                  .sort((a, b) => a.date <= b.date ? -1 : 1)

  return schedule
}

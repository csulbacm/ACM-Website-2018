const defaultState = []
export default (state = defaultState, action) => {
  switch(action.type) {

    case 'ADD_SCHEDULE_CARD':
      return [
        ...state,
        action.scheduleCard
      ]
      break

    case 'REMOVE_SCHEDULE_CARD':
      return state.filter(({ id }) => id !== action.id)
      break

    case 'UPDATE_SCHEDULE_CARD':
      return state.map((card) => card.id === action.id ? { ...card, ...action.updates } : card)

    case 'SET_SCHEDULE_CARDS':
      return action.scheduleCards
      break

    default:
      return state
      break
  }
}

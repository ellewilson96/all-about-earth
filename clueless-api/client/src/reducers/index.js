const initialState = {
  clues: [],
  category: [],
  random: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CLUES':
      console.log("load clues")
      return Object.assign({}, state, {
        clue: state.clues
      })
      case 'FETCH_CATEGORY':
        console.log("load category")
        return Object.assign({}, state, {
          category: state.category
        })
        case 'FETCH_RANDOM':
          console.log("load random clue")
          return Object.assign({}, state, {
            random: state.random
          })
    default:
      return state
  }
}

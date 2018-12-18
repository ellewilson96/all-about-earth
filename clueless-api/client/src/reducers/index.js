export default function (state = {
  clues: [],
  category: [],
  random: []
}, action)
  {
  switch (action.type) {
    case 'FETCH_CLUES':
      console.log("load clues")
      return Object.assign({}, state, {
        clue: action.clues
      })
      case 'FETCH_CATEGORY':
        console.log("load category")
        return Object.assign({}, state, {
          category: action.category
        })
        case 'FETCH_RANDOM':
          console.log("load random clue")
          return Object.assign({}, state, {
            random: action.random
          })
    default:
      return state
  }
}

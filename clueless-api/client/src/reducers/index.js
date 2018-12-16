const initialState = {
  clue_answered: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CLUE_ANSWERED':
      console.log("You flipped this clue")
      return Object.assign({}, state, {
        clue: state.clues
      })
    default:
      return state
  }
}

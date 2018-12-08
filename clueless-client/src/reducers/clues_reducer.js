function cluesReducer(state = {clues: []}, action) {
  switch(action.type) {
    case 'LOADING_CLUES':
    return state = {clues: []}
    // Each prediction is added to the state as the action function iterates through all the clues in the database
    case 'FETCH_CLUES':
    return {clues: action.payload}
    case 'ADD_CLUES':
    return {clues: [...state.clues, action.payload]}
    default:
    return state;
  }
}

export default cluesReducer;

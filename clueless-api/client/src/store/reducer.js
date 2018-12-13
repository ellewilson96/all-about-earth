const initialState = {
  clues: []
}

export default function reducer(state = initialState, action) {
 switch (action.type) {
    case 'ANSWER_CLUE':
    debugger
    return {
      ...state, clues: action.clues
    }
    default:
    return state;
 }
};

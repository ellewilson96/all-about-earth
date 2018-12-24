import { combineReducers } from "redux";

const rootReducer = combineReducers({
  clues: cluesReducer,
  category: categoryReducer,
  random: randomReducer,
  answer: answerReducer
});

export default rootReducer;


function answerReducer(state = {

  answer: [],
}, action) {
  console.log(action);
  switch (action.type) {
    case 'LOAD_ANSWER':
      return [...state, action.answer];
      default:
       return state
  }
}


function cluesReducer(state = {
  clues: [],
}, action)
 {
   switch (action.type) {
     case 'ADD_CLUES':
       return [...state, action.clues];
    default:
    return state;
  }
}

function categoryReducer(state = [], action)
 {
   switch (action.type) {
     case 'ADD_CATEGORY':
       return [...state, action.category];

    default:
    return state;
  }
}

function randomReducer(state = [], action)
 {
   switch (action.type) {
     case 'ADD_RANDOM':
       return [...state, action.random];

    default:
    return state;
  }
}

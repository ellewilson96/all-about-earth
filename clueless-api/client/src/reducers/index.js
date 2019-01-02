import { combineReducers } from "redux";

const rootReducer = combineReducers({
  clues: cluesReducer,
  category: categoryReducer,
  random: randomReducer,
});

function cluesReducer(state = [], action){
   switch (action.type) {
     case 'ADD_CLUES':
     return action.clues;
    default:
    return state;
  }
}


function categoryReducer(state = [], action)
 {
   switch (action.type) {
     case 'ADD_CATEGORY':
       return action.category;
    default:
    return state;
  }
}

function randomReducer(state = [], action)
 {
   switch (action.type) {
     case 'ADD_RANDOM':
       return action.random;

    default:
    return state;
  }
}

export default rootReducer;

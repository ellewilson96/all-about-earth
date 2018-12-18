function fetchClues(clues) {
  return  {
    type: 'ADD_CLUES',
    clues: clues
  };
}

function fetchCategory(category) {
  return  {
    type: 'ADD_CATEGORY',
    category: category
  };
}

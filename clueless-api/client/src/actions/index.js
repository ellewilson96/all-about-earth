export function fetchClues() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_CLUES_REQUEST' });
    return
    fetch('http://localhost:3001/api/v1/clues.json')
      .then(response => response.json())
      .then(clues => dispatch({ type: 'ADD_CLUES', clues }));
  };
}

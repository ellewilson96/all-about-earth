import axios from 'axios';
import { ADD_CLUES } from './types'

export function addClues() {
  return (dispatch) => {
    return axios.get('http://localhost:3001/api/v1/clues.json')
           .then(response => {
             dispatch({
               type: ADD_CLUES,
               clues: response.data
        })
      })
      .catch(error => {
        throw(error);
      });
  }
}

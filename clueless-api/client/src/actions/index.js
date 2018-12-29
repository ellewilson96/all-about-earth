import axios from 'axios';
import { ADD_CLUES, ADD_CATEGORY, ADD_RANDOM } from './types'

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

export function addCategory() {
  return (dispatch) => {
    return axios.get('http://localhost:3001/api/v1/categories.json')
           .then(response => {
             dispatch({
               type: ADD_CATEGORY,
               category: response.data
        })
      })
      .catch(error => {
        throw(error);
      });
  }
}

export function addRandom() {
  return (dispatch) => {
    return axios.get('http://localhost:3001/api/v1/random.json')
           .then(response => {
             dispatch({
               type: ADD_RANDOM,
               random: response.data
        })
      })
      .catch(error => {
        throw(error);
      });
  }
}

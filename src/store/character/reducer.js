import * as types from './types';

export const CharacterReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_MAIN_CHARACTER_SUCCESS:
      return {...state, mainCharacters: action.payload};
    case types.FETCH_MAIN_CHARACTER_LOADING:
      return {...state, mainCharactersLoading: action.payload};
    case types.FETCH_MAIN_CHARACTER_FAIL:
      return {...state, mainCharactersFail: action.payload};
    case types.FETCH_DETAIL_CHARACTER_SUCCESS:
      return {...state, detailCharacter: action.payload};
    case types.FETCH_DETAIL_CHARACTER_LOADING:
      return {...state, detailCharacterLoading: action.payload};
    case types.FETCH_DETAIL_CHARACTER_FAIL:
      return {...state, detailCharactersFail: action.payload};
    default:
      return state;
  }
};

import {
  /* we need our action types here*/ FETCHING,
  SUCCESS,
  FAILURE
} from "../actions";

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  isLoading: false,
  error: ""
};

export const charsReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: action.payload
      };
    case FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};

import {
  ADD_LABEL,
  GET_LABELS,
  UPDATE_LABEL,
  DELETE_LABEL,
  TOGGLE_NEW_LABEL
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_NEW_LABEL:
      return {
        ...state,
        toggle: !state.toggle
      };
    case GET_LABELS:
      return {
        ...state,
        labels: action.payload
      };
    case ADD_LABEL:
      return {
        ...state,
        labels: [...state.labels, action.payload]
      };
    case UPDATE_LABEL:
      return {
        ...state,
        labels: state.labels.map(label =>
          label._id === action.payload._id ? action.payload : label
        )
      };
    case DELETE_LABEL:
      return {
        ...state,
        labels: state.labels.filter(label => label._id !== action.payload)
      };
    default:
      return state;
  }
};

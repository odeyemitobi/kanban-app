import { boards } from "../../utilis/Boards";
import { Types } from "../actions/boards.action";

const INITIAL_STATE = {
  loading: false,
  boards: [],
  board: {board: boards[0]},
};

export const boardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.FETCHING_BOARDS:
      return { ...state, loading: true };
    case Types.FETCH_BOARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        boards: action,
      };
    case Types.FETCH_BOARDS_FAILURE:
      return {
        ...state,
        loading: false,
        message:
          "Sorry, we are unable to retrieve boards at the moment. Please try again later",
      };
    case Types.UPDATING_BOARDS:
      return { ...state, loading: true };
    case Types.UPDATE_BOARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        boards: action,
      };
    case Types.UPDATE_BOARDS_FAILURE:
      return {
        ...state,
        loading: false,
        message:
          "Sorry, we are unable to update boards at the moment. Please try again later",
      };
    case Types.FETCHING_BOARD:
      return { ...state, loading: true };
    case Types.FETCH_BOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        board: action,
      };
    case Types.FETCH_BOARD_FAILURE:
      return {
        ...state,
        loading: false,
        message:
          "Sorry, we are unable to retrieve boards at the moment. Please try again later",
      };
    default:
      return state;
  }
};

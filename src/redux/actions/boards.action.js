import { boards } from "../../utilis/Boards";

export const Types = {
  FETCHING_BOARDS: "FETCHING_BOARDS",
  FETCH_BOARDS_SUCCESS: "FETCH_BOARDS_SUCCESS",
  FETCH_BOARDS_FAILURE: "FETCH_BOARDS_FAILURE",
  UPDATING_BOARDS: "UPDATING_BOARDS",
  UPDATE_BOARDS_SUCCESS: "UPDATE_BOARDS_SUCCESS",
  UPDATE_BOARDS_FAILURE: "UPDATE_BOARDS_FAILURE",
  FETCHING_BOARD: "FETCHING_BOARD",
  FETCH_BOARD_SUCCESS: "FETCH_BOARD_SUCCESS",
  FETCH_BOARD_FAILURE: "FETCH_BOARD_FAILURE",
};

export const fecthBoards = () => async (dispatch) => {
  dispatch({ type: Types.FETCHING_BOARDS });
  try {
    const data = boards;
    dispatch({
      type: Types.FETCH_BOARDS_SUCCESS,
      boards: data,
    });
    return data;
  } catch (error) {
    dispatch({ type: Types.FETCH_BOARDS_FAILURE });
  }
};

export const updateBoards = (update) => async (dispatch) => {
  dispatch({ type: Types.UPDATING_BOARDS });
  try {
    const data = update;
    dispatch({
      type: Types.UPDATE_BOARDS_SUCCESS,
      boards: data,
    });
  } catch (error) {
    dispatch({ type: Types.UPDATE_BOARDS_FAILURE });
  }
};

export const fecthBoard = (board) => async (dispatch) => {
  dispatch({ type: Types.FETCHING_BOARD });
  try {
    const data = board;
    dispatch({
      type: Types.FETCH_BOARD_SUCCESS,
      board: data,
    });
  } catch (error) {
    dispatch({ type: Types.FETCH_BOARD_FAILURE });
  }
};

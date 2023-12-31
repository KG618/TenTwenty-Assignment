import { DATA_FAILED, DATA_LOADING, MOVIE_DETAILS, WATCH } from "../actions/types";
const initialState = {
  upcomingMovieList: [],
  movieDetail: {}
}

export const watchReducer = (state = initialState, action) => {

  switch (action.type) {
    case DATA_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        errMsg: null,
      };
    case DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        errMsg: action?.payload,
      };
    case WATCH:

      return {
        ...state,
        upcomingMovieList: action?.payload,
        isLoading: false,
        isSuccess: true,
        isError: false,
        errMsg: null,
      };
    case MOVIE_DETAILS:

      return {
        ...state,
        movieDetail: action?.payload,
        isLoading: false,
        isSuccess: true,
        isError: false,
        errMsg: null,
      };

      return {
        ...state,
        alertObject: action?.payload
      };

    default:
      return state;
  }
};

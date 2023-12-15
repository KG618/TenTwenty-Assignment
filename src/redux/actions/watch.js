
import { EndPoint } from "../../api/apiEndPonit";
import { GetMethod } from "../../api/APIMethod";
import {
  DATA_LOADING,
  MOVIE_DETAILS,
  WATCH
} from "./types";

export const getUpcomingMovie = (data) => {

  return (dispatch) => {

    dispatch({
      type: DATA_LOADING,
    });

    GetMethod(EndPoint.UPCOMING, dispatch, "", cb => {

      dispatch({
        type: WATCH,
        payload: cb.data.results,
      });

    })
  };
};

export const getMovieDetials = (data) => {

  return (dispatch) => {

    dispatch({
      type: DATA_LOADING,
    });

    GetMethod(EndPoint.MOVIEDETAILS, dispatch, data, cb => {
      //console.log("getMovieDetials==>", cb.data)

      dispatch({
        type: MOVIE_DETAILS,
        payload: cb.data,
      });

    })
  };
};

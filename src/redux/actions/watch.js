
import { EndPoint } from "../../api/apiEndPonit";
import { GetMethod } from "../../api/APIMethod";
import {
  DATA_LOADING,
  WATCH
} from "./types";

export const getUpcomingMovie = (data) => {

  return (dispatch) => {

    dispatch({
      type: DATA_LOADING,
    });

    GetMethod(EndPoint.UPCOMING, dispatch, cb => {


      dispatch({
        type: WATCH,
        payload: cb,
      });

    })
  };
};

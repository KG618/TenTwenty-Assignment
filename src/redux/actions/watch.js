
import { EndPoint } from "../../api/apiEndPonit";
import { GetMethod, PostMethod } from "../../api/APIMethod";
import {
  DATA_LOADING,
  WAtCH
} from "./types";

export const getUpcomingMovie = (data) => {
  return (dispatch) => {

    dispatch({
      type: DATA_LOADING,
    });

    GetMethod(EndPoint.UPCOMING, data, dispatch, false, "fun", cb => {

      console.log("cb?.user", cb)
      // dispatch({
      //   type: LOGIN_SUCCESS,
      //   payload: cb?.user,
      // });

    })
  };
};

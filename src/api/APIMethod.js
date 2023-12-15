
import { DATA_FAILED } from "../redux/actions/types";
import { baseUrl } from "./baseUrl";

export const PostMethod = async (endPoint, data, dispatch, type, fun, cb) => {

  let res
  await baseUrl
    .post(endPoint, data)
    .then(async (ress) => {

      res = ress
    })
    .catch((err) => {
      console.log(" error", err)
      dispatch({
        type: DATA_FAILED,
      });
    });
  if (res) {
    try {

      if (res?.data?.success === 1) {
        let data = { ...res?.data?.data, ...res?.data }

        cb(data)

      } else {
      }

    } catch {
      cb([])
      console.log("my side error")
      dispatch({
        type: DATA_FAILED,
      });
    }
  }
};

export const GetMethod = async (endPoint, dispatch, key, cb) => {
  if (key) {
    endPoint = endPoint + '/' + key;
  }
  console.log("endPoint=>", endPoint)

  let res
  await baseUrl
    .get(endPoint)
    .then(async (ress) => {

      res = ress
    })
    .catch((err) => {
      console.log(" error", err)
      dispatch({
        type: DATA_FAILED,
      });
    });
  if (res) {
    try {

      if (res) {
        let data = res

        cb(data)

      }

    } catch {
      // cb([])
      console.log("my side error")
      dispatch({
        type: DATA_FAILED,
      });
    }
  }
};
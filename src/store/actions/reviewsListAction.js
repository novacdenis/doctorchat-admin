import {
  CLEAN_ON_UNMOUNT_FALSE,
  CLEAN_ON_UNMOUNT_TRUE,
  REVIEWS_LIST_CLEAN,
  REVIEWS_LIST_GET,
  UPDATE_REVIEW,
} from "../actionTypes";
import api from "../../utils/appApi";

export const getReviewsList =
  (params = {}) =>
  async (dispatch) => {
    try {
      const response = await api.reviews.get(params);

      dispatch({ type: REVIEWS_LIST_GET, payload: response.data });

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  };

export const updateReivew = (review) => (dispatch) => {
  dispatch({ type: UPDATE_REVIEW, payload: review });
};

export const cleanReviewsList = () => (dispatch) =>
  dispatch({
    type: REVIEWS_LIST_CLEAN,
  });

export const setCleanOnUnmountTrue = () => (dispatch) =>
  new Promise((resolve) => {
    dispatch({
      type: CLEAN_ON_UNMOUNT_TRUE,
    });
    return resolve();
  });

export const setCleanOnUnmountFalse = () => (dispatch) =>
  new Promise((resolve) => {
    dispatch({
      type: CLEAN_ON_UNMOUNT_FALSE,
    });
    return resolve();
  });

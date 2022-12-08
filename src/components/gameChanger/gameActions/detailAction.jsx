import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../gameApi";

export const loadDetail = (id) => async (dispatch) => {

dispatch({
  type: "LOADING_DETAIL",
})

  const detailData = await axios.get(gameDetailsURL(id));
  const screenSchotData = await axios.get(gameScreenshotURL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenSchotData.data,
    },
  });
};

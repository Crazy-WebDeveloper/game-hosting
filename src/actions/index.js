import axios from 'axios';

const LOCAL_URL = "http://localhost:3000";

export function setPageNum(pageNum) {  // 
  return function (dispatch) {
    dispatch({
      type: "SET_PAGENUM",
      Payload: pageNum
    })
  };
}

export function fetchSliderData() {  // get Slider Data action
  return function (dispatch) {

    return axios.get(`${LOCAL_URL}/slider.json`)
      .then(({ data }) => {
        dispatch({
          type: "FETCH_SLIDER_DATA",
          Payload: data
        })
      });
  };
}
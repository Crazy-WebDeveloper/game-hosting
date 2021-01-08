const initialState = [];
export default function fetchSliderDataReducer (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_SLIDER_DATA':
            return { ...state, fetch_slider_data: action.Payload ? action.Payload.sliders : [] };
        default:
            return state
    }
}

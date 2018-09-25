import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: {
            uri: 'https://image.nj.com/home/njo-media/width620/img/entertainment_impact/photo/njbeachcapemb-64jpg-eb1b27e66c0c2c85.jpg'
          },
        }),
      };
    
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null,
      };

    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find((place) => {
          return place.key === action.placeKey;
        }),
      };

    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null,
      };

    default:
      return state;
  }
};

export default reducer;

import { paletteActions } from '../actions/paletteActions';

const paletteReducer = (state = [], action) => {
  if (action.type == paletteActions.ADD) {
    return action.payload?.data ? [...action.payload.data, ...state] : state;
  }

  if (action.type == paletteActions.RESET) {
    return [];
  }
};

export default paletteReducer;

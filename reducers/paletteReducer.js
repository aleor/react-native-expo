import { paletteActions } from '../actions/paletteActions';

const paletteReducer = (state = [], action) => {
  if (action.type == paletteActions.ADD) {
    return action.payload?.data ? [...action.payload.data, ...state] : state;
  }
};

export default paletteReducer;

import actions from '../actions/fetchActions';

const fetchReducer = (state, action) => {
  if (action.type === actions.LOADING) {
    return {
      result: null,
      loading: true,
      error: null,
    };
  }

  if (action.type === actions.REQ_SUCCESS) {
    return {
      result: action.payload.response,
      loading: false,
      error: null,
    };
  }

  if (action.type === actions.REQ_ERROR) {
    return {
      result: null,
      loading: false,
      error: action.payload.error,
    };
  }

  return state;
};

export default fetchReducer;

import { useReducer, useCallback } from 'react';

const initialState = {
  result: null,
  loading: true,
  error: null,
};

const useLoggingReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const decoratedDispatch = useCallback(
    (action) => {
      console.log(action);
      dispatch(action);
    },
    [dispatch],
  );

  return [state, decoratedDispatch];
};

export default useLoggingReducer;

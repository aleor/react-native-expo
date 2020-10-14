import { useReducer, useEffect } from 'react';
import actions from '../actions/actions';
import fetchReducer from '../reducers/fetchReducer';

const initialState = {
  result: null,
  loading: true,
  error: null,
};

const useFetch_withReducer = (url) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchData = async () => {
    dispatch({ type: actions.LOADING });

    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: actions.REQ_SUCCESS, payload: { response: data } });
    } catch (error) {
      dispatch({ type: actions.REQ_ERROR, payload: { error } });
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refresh = () => fetchData();

  return [state.result, state.loading, state.error, refresh];
};

export default useFetch_withReducer;

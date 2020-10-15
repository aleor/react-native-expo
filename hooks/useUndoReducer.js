import { useReducer } from 'react';
import { flowActions } from '../actions/flowActions';

const useUndoReducer = (reducer, initialState) => {
  const defaultState = {
    past: [],
    present: initialState,
    future: [],
  };

  const undoReducer = (state, action) => {
    const newPresent = reducer(state.present, action);

    if (action.type == flowActions.UNDO) {
      const [newPresent, ...newPast] = state.past;

      return {
        past: newPast,
        present: newPresent,
        future: [state.present, ...state.future],
      };
    }

    if (action.type == flowActions.REDO) {
      const [newPresent, ...newFuture] = state.future;

      return {
        past: [state.present, ...state.past],
        present: newPresent,
        future: newFuture,
      };
    }

    return {
      past: [state.present, ...state.past],
      present: newPresent,
      future: [],
    };
  };

  const [state, dispatch] = useReducer(undoReducer, defaultState);
  const canGoPast = () => !!state.past.length;
  const canGoFuture = () => !!state.future.length;

  return [state.present, dispatch, canGoPast, canGoFuture];
};

export default useUndoReducer;

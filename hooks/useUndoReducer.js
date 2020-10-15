import { useReducer } from 'react';
import { flowActions } from '../actions/flowActions';

const useUndoReducer = (reducer, initialState) => {
  const undoState = {
    past: [],
    present: initialState,
    future: [],
  };

  const undoReducer = (state = [], action) => {
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

  const hasPast = !!undoState.past.length;
  const hasFuture = !!undoState.future.length;

  const [state, dispatch] = useReducer(undoReducer, undoState);

  return [state.present, dispatch];

  // return [useReducer(undoReducer, undoState), hasPast, hasFuture];
};

export default useUndoReducer;

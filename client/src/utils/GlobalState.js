import React, { createContext, useReducer, useContext } from "react";
import { LOGIN, LOGOUT, LOADING } from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;


// TODO: Move reducer into seperate file
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        auth: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        auth: false,
        user: null,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

const defaultState = {
  auth: false,
  user: null,
};

const StoreProvider = ({ value = defaultState, ...props }) => {
  const [state, dispatch] = useReducer(reducer, value);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
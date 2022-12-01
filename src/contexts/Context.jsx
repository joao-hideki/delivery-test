import { createContext, useReducer } from 'react';

import { shoppingCartInitialState, shoppingCartReducer } from '../reducers/shoppingCart';

const initialState = {
  shoppingCart: shoppingCartInitialState,
};
const reducer = (state, action) => ({
  shoppingCart: shoppingCartReducer(state.shoppingCart, action),
});

export const Context = createContext({
  state: initialState,
  dispatch: () => null,
});

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
}

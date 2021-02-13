import React, {createContext, useReducer} from 'react';

const initialState = {
  pilihPulsaData: 0,
  pilihEWallet: '',
};

const AppContext = createContext({
  pilihPulsaData: 0,
  pilihEWallet: '',
  setPilihPulsaData: () => {},
  setPilihEWallet: () => {},
});

function stateReducer(state, action) {
  switch (action.type) {
    case 'SET_PILIH_PULSA_DATA':
      return {
        ...state,
        pilihPulsaData: action.payload,
      };
    case 'SET_PILIH_EWALLET':
      return {
        ...state,
        pilihEWallet: action.payload,
      };
    default:
      return state;
  }
}

function AppProvider(props) {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const setPilihPulsaData = (value) => {
    dispatch({
      type: 'SET_PILIH_PULSA_DATA',
      payload: value,
    });
  };

  const setPilihEWallet = (value) => {
    dispatch({
      type: 'SET_PILIH_EWALLET',
      payload: value,
    });
  };

  return (
    <AppContext.Provider
      value={{
        pilihPulsaData: state.pilihPulsaData,
        pilihEWallet: state.pilihEWallet,
        setPilihPulsaData,
        setPilihEWallet,
      }}
      {...props}
    />
  );
}

export {AppContext, AppProvider};

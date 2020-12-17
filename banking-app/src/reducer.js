import ls from "local-storage";
export const initialState = {
  customer: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      ls.set("customer", action.customer);
      return {
        ...state,
        customer: action.customer,
      };

    default:
      return state;
  }
};
export default reducer;

import * as AT from "./userTypes";

const initialState = {
    isLoggedIn: "",
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case AT.USER_REQUEST:
        return {
          ...state,
        };
      case AT.LOGOUT_REQUEST:
        return {
          ...state,
      };
      case AT.USER_SUCCESS:
        return {
            isLoggedIn: action.payload
          };
      case AT.USER_FAILURE:
        return {
          isLoggedIn: action.payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;
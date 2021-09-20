import * as AT from "./userTypes";

export const authenticateUser = (email, password)  => {
    return dispatch=>{
        dispatch(loginRequest());
        if(email==="test" && password ==="12345678"){
            dispatch(success(true));
        }
        else{
            dispatch(failure());
        }
    };
   
    
};
const loginRequest = () => {
    return {
      type: AT.USER_REQUEST
    };
};
export const logoutUser=()=>{
  return dispatch=>{
    dispatch(logoutRequest());
    dispatch(success(false));
  };
};
const logoutRequest = () => {
  return {
    type: AT.LOGOUT_REQUEST
  };
};
const success = (isLoggedIn) => {
    return {
      type: AT.USER_SUCCESS,
      payload: isLoggedIn,
    };
};
  
  const failure = () => {
    return {
      type: AT.USER_FAILURE,
      payload: false,
    };
};
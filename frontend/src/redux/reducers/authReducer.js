const initialState = {
    token: null,
    isAuthenticated: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, token: action.payload.accessToken, isAuthenticated: true, error: null };
      case 'LOGIN_FAILURE':
        return { ...state, error: action.payload, isAuthenticated: false };
      default:
        return state;
    }
  };
  
  export default authReducer;
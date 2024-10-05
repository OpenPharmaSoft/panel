const initialState = {
    patients: [],
    error: null,
  };
  
  const patientReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PATIENTS_SUCCESS':
        return { ...state, patients: action.payload, error: null };
      case 'FETCH_PATIENTS_FAILURE':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default patientReducer;
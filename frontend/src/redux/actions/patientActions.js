import axios from 'axios';

export const fetchPatients = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/patients');
    dispatch({ type: 'FETCH_PATIENTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_PATIENTS_FAILURE', payload: error.message });
  }
};
// src/components/redux/formDataSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const formDataSlice = createSlice({
  name: 'formData',
  initialState: {
    email: '',
    password: '',
    confirmpassword: '',
    fullname: '',
    dob: '',
  },
  reducers: {
    updateFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateFormData } = formDataSlice.actions;

export default formDataSlice.reducer;

// // store.js
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;

// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from './formDataSlice';

export const store = configureStore({
  reducer: {
    formData: formDataReducer,
  },
});
export default store;
import { configureStore } from '@reduxjs/toolkit';

import { usersApi } from './usersSlice';

console.log('api', usersApi);

export default configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

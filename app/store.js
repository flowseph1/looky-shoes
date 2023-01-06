import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from './services/auth';
import authSlice from '../feature/authSlice';
import { sneakerApi } from './services/sneakers';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [sneakerApi.reducerPath]: sneakerApi.reducer,
        auth: authSlice,
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware, sneakerApi.middleware),
});

setupListeners(store.dispatch);

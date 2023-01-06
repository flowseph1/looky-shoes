import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../app/services/auth';

const initialState = {
    user: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: state => {
            state.user = null;
        },
    },
    extraReducers: builder => {
        builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
            state.user = payload;
        });
    },
});

export default authSlice.reducer;

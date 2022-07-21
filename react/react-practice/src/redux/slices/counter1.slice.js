import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    count1: 0,
    users: [],
    isLoading: false,
    serverError: null
}

const getUsers = createAsyncThunk(
    'count1Slice/getUsers',
    async (_, {rejectWithValue}) => {
        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    if (!response.ok) {
                        throw Error('Bad request!!!');
                    }
                    return response.json();
                });
            return users;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const count1Slice = createSlice({
    name: 'count1Slice',
    initialState,
    reducers: {
        inc: (state, action) => {
            ++state.count1;
        },
        dec: (state, actions) => {
            --state.count1;
        },
        reset: (state, actions) => {
            state.count1 = 0;
        }
    },
    // Варінт №1
    //
    // extraReducers: {
    //      [getUsers.fulfilled]: (state, action) => {
    //          state.isLoading = false;
    //          state.users = action.payload;
    //      },
    //     [getUsers.pending]: (state) => {
    //          state.isLoading = true;
    //     },
    //     [getUsers.rejected]: (state, action) => {
    //         state.serverError = action.payload;
    //     }
    // }

    // Варінт 2 (більш простіший і правильніший)

    extraReducers: (builder) => {
        builder
            .addCase(getUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(getUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.serverError = action.payload;
            })
    }
});

const {reducer: count1Reducer, actions: {inc, dec, reset}} = count1Slice;

const count1Actions = {
    inc,
    dec,
    reset,
    getUsers
}

export {
    count1Reducer,
    count1Actions
}
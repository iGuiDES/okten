import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {ICar} from "../../interfaces";
import {carService} from "../../services";

interface IState{
    cars: ICar[];
}

const initialState:IState = {
    cars:[]
};

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
              state.cars = action.payload;
            })
    }
});

const {reducer: carReducer} = carSlice;

const carAction = {
    getAll
}

export {
    carReducer,
    carAction
}
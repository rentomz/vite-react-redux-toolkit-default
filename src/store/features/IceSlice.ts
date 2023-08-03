import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ordered as cakeOrder} from './CakeSlice'
const initialState = {
  numOfIce:20,
};

export const iceSlice = createSlice({
  name: "ice",
  initialState,
  reducers: {
    ordered:(state) => {
      state.numOfIce--
    },
    restocked:(state, action : PayloadAction<number>) =>{
      state.numOfIce += action.payload
    }
  },
  // extraReducers: {
  //   ['ice/ordered']: (state) => {
  //     state.numOfIce--
  //   }
  // }
  extraReducers(builder) {
      builder.addCase(cakeOrder, (state ) => {
        state.numOfIce--
      })
  },
});

export const {  ordered, restocked } = iceSlice.actions

export default iceSlice;
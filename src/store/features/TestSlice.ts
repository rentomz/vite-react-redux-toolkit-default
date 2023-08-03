import { createSlice } from "@reduxjs/toolkit";
import { ITest } from "../../model/TestModel";
import { fetchTest } from "../actions/TestAction";
interface Iteststate {
  loading: boolean;
  tests?: ITest[];
  error : string;
}

const initalState: Iteststate = {
  loading: false,
  tests: [],
  error: ''
};

export const testReducer = createSlice({
  name: "test",
  initialState: initalState,
  reducers: {
  },
  extraReducers(builder) {
      builder.addCase(fetchTest.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(fetchTest.fulfilled, (state, action) => {
        state.loading = false,
        state.tests = action.payload
        state.error = ''
      })
      builder.addCase(fetchTest.rejected, (state, action) => {
        state.loading = false,
        state.tests = [],
        state.error = action.error.message ?? ''
      })
  },

});


export default testReducer;

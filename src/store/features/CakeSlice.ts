import { createSlice,PayloadAction } from "@reduxjs/toolkit";
interface ICakestate {
  numOfCake : number;
}
const initialState : ICakestate  = {
  numOfCake : 10,
}

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCake--
    },
    restocked: (state, action : PayloadAction<number>) => {
      state.numOfCake += action.payload
    }
  }
})

export const {  ordered, restocked } = cakeSlice.actions

export default cakeSlice;
import { AnyAction, ThunkAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../Store'
import TestService from '../../services/TestService';



// export const fetchUser=():ThunkAction<void,RootState,unknown,AnyAction>=> {
//   return async(dispatch,getState)=>{
//     if(getState().users.users.length == 0) {
//       const response:User[]= await UserService.getAllUser();
//       dispatch(userAction.setUser(response))
//     }
//   }
// }

export const fetchTest = createAsyncThunk(
  'test/fetchAllTest',
  async () => {
    const response = await TestService.get()
    return response.data.products
  }
)


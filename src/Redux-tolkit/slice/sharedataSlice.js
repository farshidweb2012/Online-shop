import { createSlice } from '@reduxjs/toolkit';

const initialState={
    searchInput:'',
}
export const shareSlice=createSlice({
name:'share',
initialState,
reducers:{
    setSearchInput:(state,action)=>{
     state.searchInput=action.payload;
    }
}
});
export const {setSearchInput} = shareSlice.actions;
export default shareSlice.reducer
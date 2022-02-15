import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";
const initialState = {
    categoryValue: [],
    selectedCat: 0,
    status:null,
}



export const getAllCat = createAsyncThunk('category/getAllCat', async () => {
    const response = await fetch('http://localhost:3000/api/category-api/')
    const result   = await response.json(); 
    return result;
  })
export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers:{
        selectCat:(state,action)=>{
            state.selectedCat =   action.payload
        }   
    },
    extraReducers:{
        [getAllCat.pending]: (state,action)=>{
            state.status = 'Loading';
        },
        [getAllCat.fulfilled]: (state,{payload})=>{
            state.categoryValue = payload;
            state.status = 'success';
        },
        [getAllCat.rejected]:(state,action)=>{
            state.status = 'failed';
        }
    }

})



export const {selectCat} = categorySlice.actions;
export default categorySlice.reducer;

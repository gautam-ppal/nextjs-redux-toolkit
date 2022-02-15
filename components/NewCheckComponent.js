import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getAllCat,selectCat } from "../redux/slices/categorySlice";


const NewCheckComponent = ()=>{
    const dispatch      = useDispatch();
    const counterVal    = useSelector((state)=>state.counter.value) 
    const selectedCat   = useSelector((state)=>state.category.selectedCat) 
    const categoryList  = useSelector((state)=>state.category.categoryValue);
    // const getCategory = dispatch(getAllCat());

    useEffect( async ()=>{
        const getCategory = await dispatch(getAllCat());
        if(getCategory.payload){

        }
    },[])

    return (
        <> 
         <h2>Checking Counter Here {selectedCat} </h2>

{/* onClick={()=>{
                    console.log(item.cat_id)
                    dispatch(selectCat(item.cat_id))
                }} */}
        {(categoryList.category)?
         <select id="" name="" onChange={(e)=>{
             dispatch(selectCat(e.target.value))
         }} >
             {categoryList.category.map((item,index)=>{
                return <option value={item.cat_id} key={index}  {...selectedCat===item.cat_id?'selected':''}   >{item.cat_title}</option>
             })}
         </select>
        : ""}

         
        </>
    )
}
export default NewCheckComponent;
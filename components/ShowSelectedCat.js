import React, { useEffect, useState } from 'react';
import {  useSelector } from "react-redux";
import NewCheckComponent from './NewCheckComponent';



const ShowSelectedCat = ()=>{
    const selectedCat   = useSelector((state)=>state.category.selectedCat)
    const categoryList  = useSelector((state)=>state.category.categoryValue);


    // let selectBox0 = <>
    // <select>
    //     {categoryList.category?
    //     <>
    //         {categoryList.category.map((item)=>{
    //             return <option value={item.cat_id} {...(selectedCat===item.cat_id)?'selected':''} >{item.cat_title}</option>
    //         })}
    //     </>
    //     :""}
    // </select>
    // </>
    const [selectBox,setSelectBox] = useState(''); 
    useEffect(()=>{
        const select_box  = '';
        console.log('Here We Have Changes Value',selectedCat)
        
        
        // let selectBox0 = <>
        //     <select>
        //         {categoryList.category?
        //         <>
        //             {categoryList.category.map((item)=>{
        //                 return <>

                    

        //                     {selectedCat===item.cat_id?
        //                     <option value={item.cat_id} selected  >{item.cat_title}</option>
        //                     :
        //                     <option value={item.cat_id}  >{item.cat_title}</option>
        //                     }
        //                       </>
        //             })}
        //         </>
        //         :""}
        //     </select>
        //     </>

        // setSelectBox(selectBox0);
        
        
    },[selectedCat])
    // const getCategory = dispatch(getAllCat());

    // useEffect( async ()=>{
    //     categoryList =  dispatch(getAllCat());
    //     // if(getCategory.payload){
    //     // }
    //     // console.log(getCategory.payload.category)
    //     // categoryList  = useSelector((state)=>state.category.categoryValue);
    // },[selectedCat])

    return (
        <> 
         <h2>Checking Counter Here {selectedCat} </h2>


         <select value={selectedCat} >
                {categoryList.category?
                <>
                    {categoryList.category.map((item)=>{
                        return <>

                    

                            {selectedCat===item.cat_id?
                            <option value={item.cat_id} selected  >{item.cat_title}</option>
                            :
                            <option value={item.cat_id}  >{item.cat_title}</option>
                            }
                              </>
                    })}
                </>
                :""}
            </select>



         
        </>
    )
}
export default ShowSelectedCat;
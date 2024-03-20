import { createSlice } from "@reduxjs/toolkit";


const todslice=createSlice({
    name:'todo',
    initialState:[],
    reducers:{
        addData(state,action){
            state.push(action.payload)

        },
        deleteData(state,action){
            // const arr=[]
           
            // arr.push(action.payload)
            // let finalindex=arr.findIndex(val=>val===action.payload)
            // state.splice(finalindex,1)
            return state.filter((val)=>val.mobile!==action.payload)
         
            // let st=state.findIndex(val=>val===action.payload)
            // console.log(st)
          

        }
    }

})
export const {addData,deleteData}=todslice.actions
export default todslice.reducer
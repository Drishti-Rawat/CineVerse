import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies : []
};


const MylistSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {

        AddToMyList : (state,action)=>{
            state.movies = [...movies,action.payload]
        },

        removeFromList : (state,action)=>{
            state.movies = [state.movies.filter(movie=>movie.id!==action.payload)]
        }
    }
})

export const {AddToMyList,removeFromList} = MylistSlice.actions;

export default MylistSlice.reducer
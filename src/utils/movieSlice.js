import { createSlice } from "@reduxjs/toolkit";

const  movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        upcomingMovies: null,
        trendingMovies: null,
        trailerVideo : null,
    },
    reducers:{
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingMovies = action.payload
        },
        addTrendingMovies : (state, action) => {
            state.trendingMovies = action.payload
        },
        addTrailerVideo: (state, action) =>{
            state.trailerVideo = action.payload;
        }
    }
})
export const {addNowPlayingMovies, addPopularMovies, addUpcomingMovies, addTrendingMovies, addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;
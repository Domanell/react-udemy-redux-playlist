import { configureStore } from '@reduxjs/toolkit';
import { addMovie, removeMovie, moviesReducer } from './slices/moviesSlice';
import { addSong, removeSong, songsReducer } from './slices/songsSlice';
import { reset } from './actions';

// Store creation (from slices)
const store = configureStore({
	reducer: {
		songs: songsReducer, // store key (custom storage state name) and value (reducer that handle state, uses init value)
		movies: moviesReducer,
	},
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };

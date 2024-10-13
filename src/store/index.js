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

/*
	configureStore
	└── reducer
	    ├── songs                      // Reducer for the songs slice (songsSlice)
	    │   ├── name: 'song'           // Name of the slice
	    │   ├── initialState: []       // Initial state (empty array)
	    │   ├── reducers               // Main actions
	    │   │   ├── addSong(state, action)   // Adding a song
	    │   │   └── removeSong(state, action) // Removing a song
	    │   └── extraReducers          // Additional reducers
	    │       └── addCase(reset)     // Handler for the "reset" action
	    └── movies                     // Reducer for the movies slice (moviesSlice)
	        ├── name: 'movie'          // Name of the slice
	        ├── initialState: []       // Initial state (empty array)
	        ├── reducers               // Main actions
	        │   ├── addMovie(state, action)   // Adding a movie
	        │   └── removeMovie(state, action) // Removing a movie
	        └── extraReducers          // Additional reducers
	            └── addCase(reset)     // Handler for the "reset" action
	
*/

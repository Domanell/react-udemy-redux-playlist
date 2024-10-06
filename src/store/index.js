import { configureStore, createSlice } from '@reduxjs/toolkit';

// Slice creation (piece of state of store)
const songsSlice = createSlice({
	name: 'song', // uses as an action identifier
	initialState: [],
	reducers: {
		// 'song' + '/' + 'addSong'
		addSong(state, action) {
			state.push(action.payload);
		},
		removeSong(state, action) {
			const index = state.indexOf(action.payload);
			state.splice(index, 1);
		},
	},
});

const movieSlice = createSlice({
	name: 'movie',
	initialState: [],
	reducers: {
		addMovie(state, action) {
			state.push(action.payload);
		},
		removeMovie(state, action) {
			const index = state.indexOf(action.payload);
			state.splice(index, 1);
		},
	},
});

// Store creation (from slices)
const store = configureStore({
	reducer: {
		songs: songsSlice.reducer, // store key (custom storage state name) and value (reducer that handle state, uses init value)
		movies: movieSlice.reducer,
	},
});

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = movieSlice.actions;

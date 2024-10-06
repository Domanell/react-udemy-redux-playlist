import { configureStore, createSlice, createAction } from '@reduxjs/toolkit';

// Create custom action (outside slice)
const reset = createAction('app/reset');

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
	extraReducers(builder) {
		// reset in add case is 'app/reset'
		builder.addCase(reset, (state, action) => {
			return []; // assign value of an empty array
		});
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
	extraReducers(builder) {
		builder.addCase(reset, (state, action) => {
			return [];
		});
	},
});

// Store creation (from slices)
const store = configureStore({
	reducer: {
		songs: songsSlice.reducer, // store key (custom storage state name) and value (reducer that handle state, uses init value)
		movies: movieSlice.reducer,
	},
});

export { store, reset };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = movieSlice.actions;

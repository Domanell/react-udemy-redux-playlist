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
	extraReducers(builder) {
		builder.addCase(movieSlice.actions.reset, (state, action) => {
			return [];
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
		reset(state, action) {
			return [];
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
export const { addMovie, removeMovie, reset } = movieSlice.actions;

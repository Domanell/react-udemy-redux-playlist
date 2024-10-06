import { configureStore, createSlice } from '@reduxjs/toolkit';

// Slice creation (piece of state of store)
const songsSlice = createSlice({
	name: 'song',
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

// Store creation (from slices)
const store = configureStore({
	reducer: {
		songs: songsSlice.reducer, // store key (custom storage state name) and value (reducer that handle state, uses init value)
	},
});

export { store };
export const { addSong, removeSong } = songsSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

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

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;

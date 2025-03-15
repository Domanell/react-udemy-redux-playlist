import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

/**
 * The songs slice.
 *
 * @type {object}
 * @property {string} name - The name of the slice, used as an action identifier.
 * @property {Array} initialState - The initial state of the slice.
 * @property {object} reducers - The reducers for the slice.
 * @property {function} reducers.addSong - Reducer to add a song to the state.
 * @property {function} reducers.removeSong - Reducer to remove a song from the state.
 * @property {function} extraReducers - Additional reducers for the slice.
 */
const songsSlice = createSlice({
	name: 'song', // uses as an action identifier
	initialState: [],
	reducers: {
		/**
		 * Adds a song to the state.
		 *
		 * @param {Array} state - The current state of the slice, not  the global state.
		 * @param {object} action - The action object.
		 * @param {any} action.payload - The payload containing the song to add.
		 */
		addSong(state, action) {
			// 'song' + '/' + 'addSong'
			state.push(action.payload);
		},
		/**
		 * Removes a song from the state.
		 *
		 * @param {Array} state - The current state of the slice.
		 * @param {object} action - The action object.
		 * @param {any} action.payload - The payload containing the song to remove.
		 */
		removeSong(state, action) {
			const index = state.indexOf(action.payload);
			state.splice(index, 1);
		},
	},
	extraReducers(builder) {
		/**
		 * Resets the state to an empty array when the reset action is dispatched ('app/reset').
		 *
		 * @param {Array} state - The current state of the slice.
		 * @param {object} action - The action object.
		 */
		builder.addCase(reset, (state, action) => {
			return []; // return will assign the new state
			// state = []; // this will not work, because it will not change the state
		});
	},
});

/**
 * Action creators generated from the slice. Returns an action object with a type and payload.
 *
 * @type {object}
 * @property {function} addSong - Action creator to add a song.
 * @property {function} removeSong - Action creator to remove a song.
 * @returns {object} - The action object with a type and payload.
 * @example  addSong({ title: 'Song Title' }) => { type: 'song/addSong', payload: { title: 'Song Title' } }
 */
export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;

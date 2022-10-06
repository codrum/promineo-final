import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { APIClient } from '../../api/APIClient'

export const fetchAllEvents = createAsyncThunk(
	'events/fetchAllStatus',
	async () => {
		const response = await APIClient.events.fetchAll()
		return response
	}
)

const eventsSlice = createSlice({
	name: 'events',
	initialState: {
		loading: 'idle',
		events: [],
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAllEvents.fulfilled, (state, action) => {
			state.events = action.payload
		})
	},
})

export default eventsSlice.reducer

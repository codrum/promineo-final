import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { APIClient } from '../../api/APIClient'

export const fetchAllSponsors = createAsyncThunk(
	'sponsors/fetchAllStatus',
	async () => {
		const response = await APIClient.sponsors.fetchAll()
		return response
	}
)

const sponsorsSlice = createSlice({
	name: 'sponsors',
	initialState: {
		loading: 'idle',
		sponsors: [],
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAllSponsors.fulfilled, (state, action) => {
			state.sponsors = action.payload
		})
	},
})

export default sponsorsSlice.reducer

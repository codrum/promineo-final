import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { APIClient } from '../../api/APIClient'

export const fetchMemberById = createAsyncThunk(
	'members/fetchByIdStatus',
	async (memberId, thunkAPI) => {
		console.log('dispatched')
		const response = await APIClient.members.fetchByID(memberId)
		return response
	}
)

export const fetchAllMembers = createAsyncThunk(
	'members/fetchAllStatus',
	async () => {
		const response = await APIClient.members.fetchAll()
		return response
	}
)

const membersSlice = createSlice({
	name: 'members',
	initialState: {
		loading: 'idle',
		members: [],
	},
	reducers: {},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(fetchMemberById.fulfilled, (state, action) => {
			// Add user to the state array
			state.members.push(action.payload)
		})
		builder.addCase(fetchAllMembers.fulfilled, (state, action) => {
			state.members = action.payload
		})
	},
})

export default membersSlice.reducer

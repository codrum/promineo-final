import { configureStore } from '@reduxjs/toolkit'
import memberReducer from './slices/membersSlice'
import sponsorReducer from './slices/sponsorsSlice'
import eventsReducer from './slices/eventsSlice'

export const store = configureStore({
	reducer: {
		members: memberReducer,
		sponsors: sponsorReducer,
		events: eventsReducer,
	},
})

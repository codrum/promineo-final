import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllEvents } from '../../redux/slices/eventsSlice'
import { EventCard } from './card/EventCard'
import { Form } from './forms/Form'

export const EventsPage = () => {
	const dispatch = useDispatch()
	const [editMode, setEditMode] = useState(false)
	const [eventToEdit, setEventToEdit] = useState()

	const toggleEditMode = (event) => {
		if (event) {
			setEventToEdit(event)
			setEditMode(true)
		} else {
			setEventToEdit({})
			setEditMode(false)
		}
	}

	// Fetch all events
	const events = useSelector((state) => state.events.events)
	useEffect(() => {
		if (events.length) return
		dispatch(fetchAllEvents())
	}, [dispatch, events.length])

	return (
		<>
			<Box width={'100%'} height={32}></Box>
			<Grid container>
				<Grid item xs={12} md={6}>
					<Container>
						<Typography variant='h1'>Events</Typography>
						<Grid container justifyContent='flex-start'>
							{events.map((event) => {
								return (
									<Grid item xs={12} key={event.id}>
										<EventCard
											event={event}
											toggleEditMode={toggleEditMode}
										/>
									</Grid>
								)
							})}
						</Grid>
					</Container>
				</Grid>

				<Grid item xs={12} md={6}>
					<Container>
						<Typography variant='h1'>
							{editMode ? `Edit` : `Create`} event
						</Typography>
						<Form
							eventToEdit={eventToEdit}
							editMode={editMode}
							toggleEditMode={toggleEditMode}
						/>
					</Container>
				</Grid>
			</Grid>
		</>
	)
}

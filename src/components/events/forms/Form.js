import { Container, Paper } from '@mui/material'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { APIClient } from '../../../api/APIClient'
// import { createNewEvent } from '../../api/createNewEvent'
// import { updateEvent } from '../../api/updateEvent'
import { CostInput } from './CostInput'
import { DatePicker } from './DatePicker'
import { DescriptionInput } from './DescriptionInput'
import { SubmitButton } from './SubmitButton'
import { TitleInput } from './TitleInput'

export const Form = ({ eventToEdit, editMode }) => {
	const [state, setState] = useState({
		title: '',
		description: '',
		costInDollars: '',
		date: moment(),
		id: '',
	})
	// sets event to edit
	useEffect(() => {
		if (!eventToEdit) {
			setState({
				title: '',
				description: '',
				costInDollars: '',
				date: moment(),
				id: '',
			})
			return
		}
		setState({
			title: eventToEdit.title,
			description: eventToEdit.description,
			costInDollars: eventToEdit.costInDollars,
			date: eventToEdit.date,
			id: eventToEdit.id,
		})
	}, [eventToEdit])

	const handleChange = (event) => {
		let id = event.target.id
		setState({
			...state,
			[id]: event.target.value,
		})
	}
	const handleChangeDate = (newDate) => {
		setState({
			...state,
			date: newDate,
		})
	}

	// makes post request
	const handleSubmit = () => {
		const newEvent = {
			title: state.title,
			description: state.description,
			costInDollars: state.costInDollars,
			date: state.date,
		}
		if (!editMode) {
			APIClient.events.create(newEvent)
			return
		}
		APIClient.events.update(newEvent, state.id)
	}

	return (
		<Paper variant='outlined'>
			<Container>
				<TitleInput title={state.title} handleChange={handleChange} />
				<DescriptionInput
					description={state.description}
					handleChange={handleChange}
				/>
				<CostInput
					costInDollars={state.costInDollars}
					handleChange={handleChange}
				/>
				<DatePicker
					date={state.date}
					handleChangeDate={handleChangeDate}
				/>
				<SubmitButton editMode={editMode} handleSubmit={handleSubmit} />
			</Container>
		</Paper>
	)
}

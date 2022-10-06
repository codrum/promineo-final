import { Button, CardActions, Grid, Typography } from '@mui/material'
import React from 'react'
import { APIClient } from '../../../api/APIClient'
import { monthNames } from '../../../util/monthNames'

export const ActionArea = ({ event, toggleEditMode }) => {
	const date = new Date(event.date)
	const month = monthNames[date.getUTCMonth()]
	const day = date.getUTCDate()
	const year = date.getUTCFullYear()

	const handleDelete = () => {
		// eslint-disable-next-line no-restricted-globals
		const confirmedDeletion = confirm('Really delete this event?')
		if (confirmedDeletion) {
			APIClient.events.delete(event.id)
			window.location.reload(false)
		}
	}
	return (
		<CardActions sx={{ justifyContent: 'space-between', padding: '16px' }}>
			<Grid item xs={12} lg={6}>
				<Typography variant='body2'>{`${month} ${day}, ${year}`}</Typography>
			</Grid>
			<Grid item xs={12} lg={6}>
				<Button
					size='small'
					variant='contained'
					onClick={() => toggleEditMode(event)}
				>
					Edit
				</Button>
				<Button size='small' variant='contained' onClick={handleDelete}>
					Delete
				</Button>
			</Grid>
		</CardActions>
	)
}

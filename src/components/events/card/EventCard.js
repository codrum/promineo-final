import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { ActionArea } from './ActionArea'

export const EventCard = ({ event, toggleEditMode }) => {
	return (
		<Box sx={{ width: '100%' }}>
			<Card variant='outlined'>
				<CardContent>
					<Typography
						sx={{ fontSize: 14 }}
						color='text.secondary'
						gutterBottom
					>
						${event.costInDollars}
					</Typography>
					<Typography variant='h5' component='div'>
						{event.title}
					</Typography>
					<Typography
						sx={{
							mb: 1.5,
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							display: '-webkit-box',
							WebkitLineClamp: '3',
							WebkitBoxOrient: 'vertical',
						}}
						color='text.secondary'
					>
						{event.description}
					</Typography>
				</CardContent>
				<ActionArea event={event} toggleEditMode={toggleEditMode} />
			</Card>
		</Box>
	)
}

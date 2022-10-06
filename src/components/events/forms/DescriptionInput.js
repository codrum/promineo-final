import { TextField } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'

export const DescriptionInput = ({ description, handleChange }) => {
	return (
		<Box>
			<TextField
				id='description'
				label='Description'
				multiline
				rows={3}
				variant='outlined'
				value={description}
				onChange={handleChange}
				sx={{ paddingBottom: '32px', width: '100%' }}
			/>
		</Box>
	)
}

import { TextField } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'

export const TitleInput = ({ title, handleChange }) => {
	return (
		<Box>
			<TextField
				id='title'
				label='Title'
				value={title}
				onChange={handleChange}
				sx={{
					paddingBottom: '32px',
					width: '100%',
					marginTop: '32px',
				}}
			/>
		</Box>
	)
}

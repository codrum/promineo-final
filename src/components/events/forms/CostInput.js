import { TextField } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'

export const CostInput = ({ costInDollars, handleChange }) => {
	return (
		<Box>
			<TextField
				id='costInDollars'
				label='Cost'
				sx={{ paddingBottom: '32px', width: '100%' }}
				value={costInDollars}
				onChange={handleChange}
			></TextField>
		</Box>
	)
}

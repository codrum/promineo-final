import React from 'react'
import { Button } from '@mui/material'

export const SubmitButton = ({ handleSubmit }) => {
	return (
		<Button
			variant='contained'
			sx={{ marginBottom: '32px' }}
			onClick={handleSubmit}
		>
			Submit
		</Button>
	)
}

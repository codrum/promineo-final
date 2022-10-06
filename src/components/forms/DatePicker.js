import { Stack, TextField } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import React from 'react'

export const DatePicker = ({ date, handleChangeDate }) => {
	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<Stack spacing={3} sx={{ paddingBottom: '32px' }}>
				<DesktopDatePicker
					id='date'
					label='Date'
					inputFormat='MM/DD/YYYY'
					value={date}
					onChange={handleChangeDate}
					renderInput={(params) => <TextField {...params} />}
				/>
			</Stack>
		</LocalizationProvider>
	)
}

import { Avatar, Tooltip } from '@mui/material'
import React, { useState } from 'react'

export const Sponsor = ({ sponsor }) => {
	return (
		<Tooltip title={sponsor.name}>
			<Avatar
				alt={sponsor.name}
				src={sponsor.avatar}
				sx={{
					width: 112,
					height: 112,
					marginBottom: 4,
				}}
			/>
		</Tooltip>
	)
}

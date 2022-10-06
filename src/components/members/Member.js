import { Avatar, Tooltip } from '@mui/material'
import React, { useState } from 'react'

export const Member = ({ member }) => {
	return (
		<Tooltip title={member.name}>
			<Avatar
				alt={member.name}
				src={member.avatar}
				sx={{
					width: 112,
					height: 112,
					marginBottom: 4,
				}}
			/>
		</Tooltip>
	)
}

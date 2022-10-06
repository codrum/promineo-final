import { Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllMembers } from '../../redux/slices/membersSlice'
import { Member } from './Member'

export const MembersList = () => {
	const dispatch = useDispatch()
	const members = useSelector((state) => state.members.members)
	useEffect(() => {
		if (members.length) return
		dispatch(fetchAllMembers())
		// dispatch(fetchAllSponsors())
	}, [dispatch, members.length])

	return (
		<Container>
			<h1>Members</h1>
			<Grid container sx={{ marginTop: 5, justifyContent: 'center' }}>
				{members.map((member) => {
					return (
						<Grid
							item
							key={'member' + member.id}
							xs={6}
							md={4}
							lg={2}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Member key={member.id} member={member} />
						</Grid>
					)
				})}
			</Grid>
		</Container>
	)
}

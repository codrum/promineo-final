import { Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllSponsors } from '../../redux/slices/sponsorsSlice'
import { Sponsor } from './Sponsor'

export const SponsorsList = () => {
	const dispatch = useDispatch()
	const sponsors = useSelector((state) => state.sponsors.sponsors)

	useEffect(() => {
		if (sponsors.length) return
		dispatch(fetchAllSponsors())
	}, [dispatch, sponsors.length])
	return (
		<Container>
			<h1>Sponsors</h1>
			<Grid container sx={{ marginTop: 5, justifyContent: 'center' }}>
				{sponsors.map((sponsor) => {
					return (
						<Grid
							item
							key={'sponsor' + sponsor.id}
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
							<Sponsor key={sponsor.id} sponsor={sponsor} />
						</Grid>
					)
				})}
			</Grid>
		</Container>
	)
}

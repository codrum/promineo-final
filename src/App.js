import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { EventsPage } from './components/events/EventsPage'
import { Layout } from './components/Layout'
import { MembersList } from './components/members/MembersList'
import { SponsorsList } from './components/sponsors/SponsorsList'
export const App = () => {
	return (
		<div>
			{/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
			<Routes>
				{/**layout contains components rendered on every page with route content inside */}
				<Route path='/' element={<Layout />}>
					<Route index element={<MembersList />} />
					<Route path='members' element={<MembersList />} />
					<Route path='sponsors' element={<SponsorsList />} />
					<Route path='events' element={<EventsPage />} />

					{/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
					<Route path='*' element={<NoMatch />} />
				</Route>
			</Routes>
		</div>
	)
}

// function Home() {
// 	return (
// 		<div>
// 			<h2>Home</h2>
// 		</div>
// 	)
// }

function NoMatch() {
	return (
		<div>
			<h2>Nothing to see here!</h2>
			<p>
				<Link to='/'>Go to the home page</Link>
			</p>
		</div>
	)
}

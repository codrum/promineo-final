/**contains all api routes necessary for project */
export const APIClient = {
	members: {
		fetchAll: async () => {
			var requestOptions = {
				method: 'GET',
				redirect: 'follow',
			}
			const response = await fetch(
				'https://6334ac5e849edb52d6f5e371.mockapi.io/api/members',
				requestOptions
			)
			return response.json()
		},
		fetchByID: async (id) => {
			var requestOptions = {
				method: 'GET',
				redirect: 'follow',
			}

			const response = await fetch(
				`https://6334ac5e849edb52d6f5e371.mockapi.io/api/members/${id}`,
				requestOptions
			)
			return response.json()
		},
	},
	sponsors: {
		fetchAll: async () => {
			var requestOptions = {
				method: 'GET',
				redirect: 'follow',
			}
			const response = await fetch(
				'https://6334ac5e849edb52d6f5e371.mockapi.io/api/sponsors',
				requestOptions
			)
			return response.json()
		},
	},
	events: {
		fetchAll: async () => {
			var requestOptions = {
				method: 'GET',
				redirect: 'follow',
			}
			const response = await fetch(
				'https://6334ac5e849edb52d6f5e371.mockapi.io/api/events',
				requestOptions
			)
			return response.json()
		},
		create: async (newEvent) => {
			var myHeaders = new Headers()
			myHeaders.append('Content-Type', 'application/json')

			var raw = JSON.stringify({
				title: newEvent.title,
				description: newEvent.description,
				costInDollars: newEvent.costInDollars,
				date: newEvent.date,
			})

			var requestOptions = {
				method: 'POST',
				headers: myHeaders,
				body: raw,
				redirect: 'follow',
			}

			const response = await fetch(
				'https://6334ac5e849edb52d6f5e371.mockapi.io/api/events',
				requestOptions
			)
			return response.json()
		},
		update: async (updatedEvent, id) => {
			var myHeaders = new Headers()
			myHeaders.append('Content-Type', 'application/json')
			var raw = JSON.stringify({
				title: updatedEvent.title,
				description: updatedEvent.description,
				costInDollars: updatedEvent.costInDollars,
				date: updatedEvent.date,
			})
			var requestOptions = {
				method: 'PUT',
				headers: myHeaders,
				body: raw,
				redirect: 'follow',
			}

			const response = await fetch(
				`https://6334ac5e849edb52d6f5e371.mockapi.io/api/events/${id}`,
				requestOptions
			)
			return response.json()
		},
		delete: async (id) => {
			var requestOptions = {
				method: 'DELETE',
				redirect: 'follow',
			}
			const response = await fetch(
				`https://6334ac5e849edb52d6f5e371.mockapi.io/api/events/${id}`,
				requestOptions
			)
			return response.json()
		},
	},
}

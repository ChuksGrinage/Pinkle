const codegenClient = <TData, TVariables>(query: string, variables?: TVariables): (() => Promise<TData>) =>
	async () => client('/graphql', {
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			query,
			variables
		})
	})


const client = async (url: string, params?: RequestInit) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
		method: 'POST',
		credentials: 'include',
		...params
	})
	const json = await res.json()
	if (json.errors) {
		const { message } = json.errors[0] || 'Error...'
		throw new Error(message)
	}
	return json
}

export { client, codegenClient }
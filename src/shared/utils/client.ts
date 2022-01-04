const gqlClient = <TData, TVariables>(query: string, variables?: TVariables): (() => Promise<TData>) => {
	return async () => {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/graphql`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query,
				variables,
			}),
		});

		const json = await res.json();

		if (json.errors) {
			const { message } = json.errors[0] || 'Error..';
			throw new Error(message);
		}

		return json.data;
	};
};


function client(endpoint: string, { body, ...customConfig }: any = {}) {
	const config = {
		method: body ? 'POST' : 'GET',
		...customConfig,
		headers: {
			'content-type': 'application/json',
			...customConfig.headers,
		},
	}
	if (body) {
		config.body = body
	}
	return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`, config)
		.then(async response => {
			if (response.ok) {
				return await response.json()
			} else {
				const errorMessage = await response.text()
				return Promise.reject(new Error(errorMessage))
			}
		})
}

export { client, gqlClient }
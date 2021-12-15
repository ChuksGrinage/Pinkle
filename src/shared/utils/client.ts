export const client = <TData, TVariables>(query: string, variables?: TVariables): (() => Promise<TData>) => {
	return async () => {
		const headers = new Headers()
		headers.append('content-type', 'application/json')

		const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
			method: 'POST',
			credentials: "include",
			headers,
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
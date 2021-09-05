
const url = 'http://localhost:8000/graphql/'
module.exports = {
	overwrite: true,
	schema: url,
	documents: ['src/**/*.graphql', 'src/**/*.gql'],
	hooks: {
		afterAllFileWrite: ['prettier --write'],
	},
	generates: {
		'src/generated/index.ts': {
			plugins: [
				{
					add: {
						content: '/* eslint-disable */',
					},
				},
				'typescript',
				'typescript-operations',
				'typescript-react-query',
			],
			config: {
				fetcher: {
					endpoint: url,
					fetchParams: {
						credentials: 'include',
						headers: {
							"Content-Type": 'application/json',
							'Authorization': 'TOKEN-HERE',
						}
					}
				}
			}
		},
	},
}

// https://hasura.io/learn/graphql/typescript-react-apollo/codegen/
const URL = 'http://localhost:8000/graphql'
module.exports = {
	overwrite: true,
	schema: URL,
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
					func: 'shared/utils#codegenClient',
					// endpoint: URL,
					// fetchParams: {
					// 	credentials: 'include',
					// 	headers: {
					// 		"Content-Type": 'application/json',
					// 		'Authorization': 'TOKEN-HERE',
					// 	}
					// }
				}
			}
		},
	},
}
// https://hasura.io/learn/graphql/typescript-react-apollo/codegen/
import * as React from 'react'
import { useRouter } from 'next/router'
import { useMeQuery } from 'generated'

const UserContext = React.createContext(undefined)
const UserProvider = ({ children }) => {
	const router = useRouter()

	const { data: { me } = {} } = useMeQuery(undefined, {
		onError: () => router.replace('/login?next=' + router.pathname),
		retry: false,
	})
	console.log({ me })

	return <UserContext.Provider value={me}>{children}</UserContext.Provider>
}

function useUser() {
	const context = React.useContext(UserContext)
	if (context === undefined) {
		throw new Error(`useUser must be used within a UserProvider`)
	}
	return context
}

// export { useUser, UserProvider }

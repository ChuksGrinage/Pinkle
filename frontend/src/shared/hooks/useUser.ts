import * as React from 'react'
import { useRouter } from 'next/router'
import { useMeQuery } from 'generated'

const useUser = () => {
	const router = useRouter()

	const { data: { me: user } = {}, isLoading } = useMeQuery(undefined, {
		onError: () => router.replace('/login?next=' + router.pathname),
		retry: false,
	})
	return { user, isLoading }
}

export default useUser

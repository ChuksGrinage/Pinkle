import { useQuery } from "react-query"
import { useRouter } from "next/router"

export async function fetchSession() {
	const res = await fetch("/api/auth/me")
	const session = await res.json()
	if (Object.keys(session).length) {
		return session
	}
	return null
}


export function useSession({
	required = false,
	// TODO: Make this into a env var
	redirectTo = "/api/auth/signin?error=SessionExpired",
	queryConfig = {} as any,
}) {
	const router = useRouter()
	const query = useQuery(["session"], fetchSession, {
		...queryConfig,
		onSettled(data, error) {
			if (queryConfig.onSettled) queryConfig.onSettled(data, error)
			if (data || !required) return
			router.push(redirectTo)
		},
	})
	return [query.data, query.status === "loading"]
}
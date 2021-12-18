// @ts-nocheck
import { useRouter } from "next/router"
// import { useGetTokenMutation, useMeQuery } from "generated"
import { useMutation, useQuery } from "react-query"
import { client } from "."


export function useSession({
	required,
	redirectTo = "/login",
	queryConfig = {},
} = {}) {
	const router = useRouter()
	const query = useQuery(["session"], () => client('/me', { method: 'GET' }), {
		...queryConfig,
		retry: false,
		onSettled(data, error) {
			console.log(data, error)
			if (queryConfig.onSettled) queryConfig.onSettled(data, error)
			if (error) return client('/refresh')
			if (data || !required) return
			router.push(redirectTo)
		},
	})
	return [query.data, query.status === "loading"]
}


export async function getToken({ email, password }) {
	// TODO: WTF is going on here; why do I need to do all of this to get it to work?!!
	const formBody = new FormData()
	formBody.set("username", email)
	formBody.set("password", password)
	const data = new URLSearchParams(formBody)
	const res = await fetch("http://localhost:8000/login", {
		method: 'POST',
		credentials: "include",
		headers: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		body: data
	});
	const session = await res.json()
	if (Object.keys(session).length) {
		return session
	}
	return null
}

export async function revokeToken() {
	const res = await fetch("http://localhost:8000/logout", {
		method: 'DELETE',
		credentials: "include",
	});
	const session = await res.json()
	if (Object.keys(session).length) {
		return session
	}
	return null
}


export function useAuth() {

	const { mutate, error } = useMutation(userCredentials => getToken(userCredentials))
	const router = useRouter()


	const login = (userCredentials: { email: string, password: string }) => {

		mutate(userCredentials, {
			onSuccess: (data) => {
				localStorage.setItem(process.env.NEXT_PUBLIC_ACCESS_TOKEN, data.accessToken)
				router.push('/')
			},
			onError: () => {
				if (router.pathname !== '/login') router.push('login')
			}
		})
	}
	const logout = () => {
		revokeToken()
		router.push('/login')
	}

	return { login, logout, error }
}
import { useRouter } from 'next/router'
import { useAuth } from 'shared/components/auth-provider'
import { useEffect } from 'react'

export default function AuthGuard({ children }: { children: JSX.Element }) {
  const { user, isUserLoading, setRedirect } = useAuth()
  const router = useRouter()
  useEffect(() => {
    if (!isUserLoading) {
      // auth is initialized and there is no user
      if (!user) {
        // remember the page that user tried to access
        // router.replace('/login?next=' + router.pathname)
        setRedirect(router.route)
        router.push('/login')
      }
    }
  }, [isUserLoading, router, user, setRedirect])

  /* show loading indicator while the auth provider is still initializing */
  if (isUserLoading) {
    return <h1>Application Loading</h1>
  }

  // if auth initialized with a valid user show protected page
  if (!isUserLoading && user) {
    return <>{children}</>
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null
}

//import { setUser } from '@sentry/nextjs'
import { useEffect } from 'react'
import { useAccount } from 'wagmi'

function useSentryUser() {
  const { address: account } = useAccount()
  useEffect(() => {
    if (account) {
      console.log('>>> useSentryUser', account)
      /*setUser({ account })*/
    }
  }, [account])
}

export default useSentryUser

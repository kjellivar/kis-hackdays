import { signIn, signOut, useSession } from 'next-auth/client'

export default function Page() {
  const [ session, loading ] = useSession()

  if(!session && !loading) {
    signIn()
    return null;
  }

  if (loading) {
    return null;
  }

  return <>
    {!session && <>
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
      <button onClick={() => {
        fetch('api/top-tracks', {
          credentials: 'include'
        }).then(res => res.json()).then(console.log)
      }}>Get top tracks</button>
    </>}
  </>
}

import { useState } from 'react'
import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/client'
import Valence from '../components/valence'

export default function Page() {
    const [session, loadingAuth] = useSession()
    const [isFetchingTracks, setIsFetchingTracks] = useState(false)
    const [tracks, setTracks] = useState()

    if (!session && !loadingAuth) {
        signIn()
    }

    const handleClick = () => {
        setIsFetchingTracks(true)
        fetch('api/top-tracks', {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                setIsFetchingTracks(false)
                setTracks(data)
                console.log(data)
            })
            .catch(() => {
                signOut()
            })
    };

    return <>
        <Head>
            <title>Hackdays Q1 2021 - Spotify API test</title>
        </Head>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Hackdays Q1 2021 Spotify test</a>
                {session && <span className="navbar-text">Signed in as {session.user.email}</span>}
                <button className="btn btn-secondary" onClick={() => signOut()}>Sign out</button>
            </div>
        </nav>
        <main className="container text-center py-5">
            {tracks && (
                <>
                    <Valence value={tracks.medians.valence} />
                </>
            )}
            <button
                className="btn btn-primary"
                onClick={handleClick}
                disabled={isFetchingTracks}
            >
                {!isFetchingTracks && 'Get top tracks'}
                {isFetchingTracks && <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                </>}
            </button>
        </main>
    </>
}

import { useState, useEffect } from 'react'
import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/client'
import Valence from '../components/spotify/valence'
import Mode from '../components/spotify/mode'
import Bpm from '../components/spotify/bpm'
import Track from '../components/spotify/track'
import FetchButton from '../components/spotify/fetch-button'
import NavBar from '../components/spotify/nav-bar'

export default function Page() {
    const [session, loadingAuth] = useSession()
    const [isFetchingTracks, setIsFetchingTracks] = useState(false)
    const [tracks, setTracks] = useState()
    const [timeRange, setTimeRange] = useState('recent')
    const [limit, setLimit] = useState(5)

    useEffect(() => {
        const timer = setInterval(() => {
                if(tracks && !isFetchingTracks) {
                    fetchTracks()
                }
            },
            30000
        );
        return () => clearInterval(timer);
    });

    if (!session && !loadingAuth) {
        signIn()
    }

    function fetchTracks() {
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
    }

    const handleClick = () => {
        setIsFetchingTracks(true)
        fetchTracks()
    };

    return <>
        <Head>
            <title>Hackdays Q1 2021 - Spotify API test</title>
        </Head>
        <NavBar 
            session={session}
            onSignOut={() => signOut()}
        />
        <main className="container text-center py-5">
            {tracks ? (
                <>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                        <div className="col">
                            <Valence
                                valence={tracks.medians.valence}
                                danceability={tracks.medians.danceability}
                                energy={tracks.medians.energy}
                            />
                        </div>
                        <div className="col">
                            <Mode
                                mode={tracks.modes.mode[0]}
                            />
                        </div>
                        <div className="col">
                            <Bpm
                                bpm={tracks.medians.tempo}
                            />
                        </div>
                        <div className="col">
                            Placeholder
                        </div>
                    </div>
                    <h2 className="py-3 mt-5">Based on these tracks:</h2>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-4 text-start">
                        {tracks.tracks.map(track => (
                            <div className="col" key={track.id}>
                                <Track track={track} />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="p-4 pb-5 rounded bg-light">
                    <h1 className="display-4">What up</h1>
                    <p className="lead py-3">
                        Analyze your listening habits, and see what kind of mood you're in these days.
                    </p>
                    
                    <FetchButton
                        loading={isFetchingTracks}
                        onClick={handleClick}
                    />
                </div>
            )}
            
        </main>
    </>
}

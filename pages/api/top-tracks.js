import jwt from 'next-auth/jwt'
import { median, mode } from 'mathjs'
import SpotifyClient from '../../lib/spotify-client'

const secret = SpotifyClient.CLIENT_SECRET

export default async (req, res) => {
    const { accessToken } = await jwt.getToken({ req, secret })
    const client = new SpotifyClient(accessToken)

    //const tracks = await client.fetchTopTracks('short_term', 50)
    const tracks = await client.fetchRecentlyPlayedTracks(5)

    const audioFeatures = await client.fetchAudioFeatures(tracks.map(item => item.id))
    const keys = [
        'acousticness',
        'danceability',
        'energy',
        'instrumentalness',
        'key',
        'liveness',
        'loudness',
        'mode',
        'speechiness',
        'tempo',
        'valence',
    ];
    const features = new Map(
        keys.map(key => [key, audioFeatures.map(feat => feat[key])])
    )

    return res.status(200).json({
        audioFeatures,
        tracks,
        trackNames: tracks.map(item => item.name),
        medians: Object.assign(
            ...keys.map(key => ({ 
                    [key]: median(features.get(key)) 
                })
            ),
        ),
        modes: Object.assign(
            ...keys.map(key => ({ 
                    [key]: mode(features.get(key)) 
                })
            ),
        )
    })
};
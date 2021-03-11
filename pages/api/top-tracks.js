import jwt from 'next-auth/jwt'
import { median, mean } from 'mathjs'
import SpotifyClient from '../../lib/spotify-client'

const secret = process.env.SPOTIFY_CLIENT_SECRET

export default async (req, res) => {
    const { accessToken } = await jwt.getToken({ req, secret })
    const client = new SpotifyClient(accessToken);

    const topTracks = await client.fetchTopTracks()
    //const analysis = await client.fetchAnalysis(topTracks[0].id)
    const audioFeatures = await client.fetchAudioFeatures(topTracks.map(item => item.id))
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
        topTracks,
        audioFeatures,
        medians: Object.assign(
            ...keys.map(key => ({ 
                    [key]: median(features.get(key)) 
                })
            )
        ),
        means: Object.assign(
            ...keys.map(key => ({
                    [key]: mean(features.get(key))
                })
            )
        )
    })
};
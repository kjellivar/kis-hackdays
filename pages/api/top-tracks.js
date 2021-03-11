import jwt from 'next-auth/jwt'

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const secret = process.env.SPOTIFY_CLIENT_SECRET

export default async function getTopTracks(req, res) {
    const token = await jwt.getToken({ req, secret })

    const response = await fetch(TOP_TRACKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${token.accessToken}`
        }
    }).then(res => res.json());
    return res.status(200).json({ tracks: response.items })
}
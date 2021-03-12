import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import SpotifyClient from '../../../lib/spotify-client'

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Spotify({
            clientId: SpotifyClient.CLIENT_ID,
            clientSecret: SpotifyClient.CLIENT_SECRET,
            scope: SpotifyClient.SCOPES,
        })
    ],
    callbacks: {
        async jwt(token, _, account) {
            if (account?.accessToken) {
                token.accessToken = account.accessToken;
            }
            return token
        }
    },
    secret: SpotifyClient.CLIENT_SECRET,
    session: {
        jwt: true,        
        // Seconds - How long until an idle session expires and is no longer valid.
        maxAge: 60 * 60, // 1 Hour
    }
})
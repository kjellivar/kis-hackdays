import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Spotify({
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
            scope: 'user-read-email user-top-read',
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
    secret: process.env.SPOTIFY_CLIENT_SECRET,
    session: {
        jwt: true,        
        // Seconds - How long until an idle session expires and is no longer valid.
        maxAge: 60 * 60, // 1 Hour
    }
})
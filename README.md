# Hackdays Projects
Purpose of this repo is to gather my various hackdays projects in [one place](https://kis-hackdays.vercel.app) to spend less time on setup for each hackdays project. Made with next.js. Runs on node 14. Hosted on Vercel.

## Running locally
Make sure you run with the following env variables set in a `.env.local` file on project root:

```properties
# Base uri for nextauth
NEXTAUTH_URL=http://localhost:3000

# Spotify app vars, found in https://developer.spotify.com/dashboard
SPOTIFY_CLIENT_ID=veryclient
SPOTIFY_CLIENT_SECRET=supersecret
```

Then install and run it:

```shell
$ npm install
$ npm run dev
```

Point your browser to [http://localhost:3000](http://localhost:3000)

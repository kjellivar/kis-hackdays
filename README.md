# Hackdays Projects
Purpose of this repo is to gather my various hackdays projects in [one place](https://kis-hackdays.vercel.app) to spend less time on setup for each hackdays project. Made with next.js. Runs on node 14. Hosted on Vercel.

## Running locally
Make sure you run with the following env variables set: 

- `SPOTIFY_CLIENT_SECRET` - Secret for your [spotify app](https://developer.spotify.com/dashboard/)
- `SPOTIFY_CLIENT_ID` - ID for your [spotify app](https://developer.spotify.com/dashboard/)
- `NEXTAUTH_URL` - Base url

Example:

```shell
~$ npm install

~$ SPOTIFY_CLIENT_SECRET=supersecret SPOTIFY_CLIENT_ID=veryclient NEXTAUTH_URL=http://localhost:3000 npm run dev
```

Then point your browser to [http://localhost:3000](http://localhost:3000)

## Projects

### 2021
- [Calculating mood based on Spotify listening habits](https://kis-hackdays.vercel.app/spotify)
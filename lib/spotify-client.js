const SHORT_TERM = 'short_term';
const MEDIUM_TERM = 'medium_term';
const LONG_TERM = 'long_term';

const SCOPES = [
    'user-read-email',
    'user-top-read',
    'user-read-recently-played'
].join(' ');

export default class SpotifyClient {
    static SCOPES = SCOPES;
    static CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
    static CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

    constructor(accessToken) {
        this.accessToken = accessToken;
    }
    
    fetchAnalysis(id) {
        return this.callApi(`audio-analysis/${id}`)
    }

    /**
     * Fetch user's top played tracks.
     * Dependent on the user-top-read auth scope
     * 
     * @param {SHORT_TERM|MEDIUM_TERM|LONG_TERM} timeRange 
     * @param {number} limit 
     * @returns Promise<Array<{ name: string, id: string }>>
     */
    async fetchTopTracks(timeRange = MEDIUM_TERM, limit = 20) {
        const res = await this.callApi(`me/top/tracks?time_range=${timeRange}&limit=${limit}`);
        return res.items;
    }

    /**
     * Fetch user's recently played tracks.
     * Dependent on the user-read-recently-played auth scope
     * 
     * @param {number} limit 
     * @returns Promise<Array<{ track: { name: string, id: string }}>>
     */
    async fetchRecentlyPlayedTracks(limit = 50) {
        const res = await this.callApi(`me/player/recently-played?limit=${limit}`);
        return res.items.map(item => item.track);
    }

    async fetchAudioFeatures(ids) {
        const res = await this.callApi(`audio-features?ids=${ids.join(',')}`);
        return res['audio_features'];
    }

    async callApi(endpoint) {
        const res = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
            headers: {
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        return res.json();
    }
}
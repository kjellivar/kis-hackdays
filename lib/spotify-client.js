export default class SpotifyClient {
    constructor(accessToken) {
        this.accessToken = accessToken;
    }
    
    fetchAnalysis(id) {
        return this.callApi(`audio-analysis/${id}`)
    }

    fetchTopTracks() {
        return this.callApi('me/top/tracks').then(res => res.items)
    }

    fetchAudioFeatures(ids) {
        return this.callApi(`audio-features?ids=${ids.join(',')}`).then(res => res['audio_features'])
    }

    callApi(endpoint) {
        return fetch(`https://api.spotify.com/v1/${endpoint}`, {
            headers: {
                Authorization: `Bearer ${this.accessToken}`
            }
        }).then(res => res.json());
    }
}
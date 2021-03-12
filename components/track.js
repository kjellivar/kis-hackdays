export default function Track({ track }) {
    return (
        <div className="card h-100 shadow-sm">
            <img className="card-img-top" src={track.album.images[0].url} />
            <div className="card-body">
                <h3 class="card-title h5">{track.artists.map(artist => artist.name).join(', ')}</h3>
                <p class="card-text">{track.name}</p>
            </div>
        </div>
    )
}
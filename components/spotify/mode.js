const MINOR = 0;
const MAJOR = 1;

export default function Mode({ mode }) {
    return (
        <div className="card py-3 h-100">
            <div className="card-img-top display-1">
                {mode === MINOR && '🌧'}
                {mode === MAJOR && '🔆'}
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    Atmosphere
                </h2>
                <p className="card-text">
                    {mode === MINOR && 'You like a bit of melancholy in your songs.' }
                    {mode === MAJOR && 'You prefer a brighter, happier tone in your songs.' }
                </p>
            </div>
        </div>
    );
}
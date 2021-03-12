const SLOW = '🐢';
const NORMAL = '🚶‍♀️';
const FAST = '🏃‍♂️';
const LIGHTNING = '⚡️';

export default function Bpm({ bpm }) {
    let speed = NORMAL
    if (bpm <= 100) {
        speed = SLOW
    } else if (bpm <= 120) {
        speed = NORMAL
    } else if (bpm <= 160) {
        speed = FAST
    } else {
        speed = LIGHTNING
    }

    return (
        <div className="card py-3 h-100">
            <div className="card-img-top display-1">
                {speed}
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    Speed
                </h2>
                <p className="card-text">
                    {speed === SLOW && 'You like a slow and steady beat.' }
                    {speed === NORMAL && 'You prefer a moderate speed in the songs.' }
                    {speed === FAST && 'Gotta go fast.' }
                    {speed === LIGHTNING && 'You listen to lightning fast songs you crazy person.' }
                </p>
            </div>
        </div>
    )
}
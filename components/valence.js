export default function Valence({ valence, energy, danceability }) {
    const isRythmic = danceability > 0.5;
    const isEnergetic = energy > 0.5;
    const isPositive = valence > 0.5;

    // 0,0,0
    const isDepressed = !isRythmic && !isEnergetic && !isPositive;
    // 0,0,1
    const isCalm = !isRythmic && !isEnergetic && isPositive;
    // 0,1,0
    const isStressed = !isRythmic && isEnergetic && !isPositive;
    // 0,1,1
    const isJazzy = !isRythmic && isEnergetic && isPositive;
    // 1,0,0
    const isSad = isRythmic && !isEnergetic && !isPositive;
    // 1,0,1
    const isHappy = isRythmic && !isEnergetic && isPositive;
    // 1,1,0
    const isMetal = isRythmic && isEnergetic && !isPositive;
    // 1,1,1
    const isEuphoric = isRythmic && isEnergetic && isPositive;

    let emoji;
    if(isDepressed) {
        emoji = '😭';
    }
    if(isCalm) {
        emoji = '😌'
    }
    if(isStressed) {
        emoji = '😱'
    }
    if(isJazzy) {
        emoji = '😎'
    }
    if(isSad) {
        emoji = '😔'
    }
    if(isHappy) {
        emoji = '😃'
    }
    if(isMetal) {
        emoji = '👿'
    }
    if(isEuphoric) {
        emoji = '🤩'
    }

    return (
        <div className="card py-3 h-100">
            <div className="card-img-top display-1">{emoji}</div>
            <div className="card-body">
                <h2 className="card-title">
                    Mood
                </h2>
                <p className="card-text">
                    Valence: {valence.toFixed(2)*100}%<br/>
                    Energy: {energy.toFixed(2)*100}%<br/>
                    Danceability: {danceability.toFixed(2)*100}%<br/>
                </p>
            </div>
        </div>
    )
}
export default function Valence({ value }) {
    let emoji = '😄'
    if (value < 0.25) {
        emoji = '😔'
    } else if (value < 0.5) {
        emoji = '😐'
    } else if (value < 0.75) {
        emoji = '😊'
    }
    return (
        <div className="text-center">
            <div className="display-1">{emoji}</div>
            <p>
                Valence: {value}
            </p>
        </div>
    )
}
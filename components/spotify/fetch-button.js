export default function FetchButton({ loading, onClick }) {
    return (
        <button
            className="btn btn-primary btn-lg px-5 rounded-pill"
            onClick={onClick}
            disabled={loading}
        >
            {!loading && 'Show me'}
            {loading && <>
                <span className="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>
                <span className="visually-hidden">Loading</span>
            </>}
        </button>
    );
}
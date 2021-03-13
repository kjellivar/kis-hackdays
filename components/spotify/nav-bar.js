export default function NavBar({ session, onSignOut }) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Hackdays Q1 2021 Spotify test</a>
                {session && <span className="navbar-text">Signed in as {session.user.email}</span>}
                <button className="btn btn-secondary" onClick={onSignOut}>Sign out</button>
            </div>
        </nav>
    )
}
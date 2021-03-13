import Head from 'next/head'
import Link from 'next/link'

export default function Page() {
    return <>
        <Head>
            <title>Hackday Projects by Kjell Ivar Storstein</title>
        </Head>
        <div className="container">
            <h1>Hackday Projects</h1>
            <p className="lead">Here are different hackday projects by Kjell Ivar Storstein</p>
            <h2>2021</h2>
            <ul>
                <li>
                    <Link href="/spotify">
                        Calculating mood based on Spotify listening habits
                    </Link>
                </li>
            </ul>
        </div>
    </>
}

import Head from 'next/head'
import Link from 'next/link'
import { allLocations } from 'contentlayer/generated'

export async function getStaticProps() {
    return { props: { locations: allLocations } }
}

function PostCard(location) {
    return (
        <div className="mb-6">
            <h2 className="text-lg">
                <Link href={location.url}>
                    <a className="text-blue-700 hover:text-blue-900">{location.name}</a>
                </Link>
            </h2>
        </div>
    )
}

export default function Home({ locations }) {
    return (
        <div className="mx-auto max-w-2xl py-16 text-center">
            <Head>
                <title>Contentlayer Blog Example</title>
            </Head>

            <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1>

            <ul>
                {locations.map((location, idx) => (
                    <li key={idx}>
                        <Link href={location.url}>
                            <a className="text-blue-700 hover:text-blue-900">{location.name}</a>
                        </Link>
                    </li>
                ))}

            </ul>
        </div>
    )
}
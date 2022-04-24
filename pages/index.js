import Head from 'next/head'
import Link from 'next/link'
import { allBeings } from 'contentlayer/generated'

export async function getStaticProps() {
  return { props: { beings: allBeings } }
}

function PostCard(being) {
  return (
    <div className="mb-6">
      <h2 className="text-lg">
        <Link href={being.url}>
          <a className="text-blue-700 hover:text-blue-900">{being.name}</a>
        </Link>
      </h2>
    </div>
  )
}

export default function Home({ beings }) {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Contentlayer Blog Example</title>
      </Head>

      <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1>

      <Link href="/beings">
        <a className="text-blue-700 hover:text-blue-900">Beings</a>
      </Link>
    </div>
  )
}
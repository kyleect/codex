import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { allBeings } from 'contentlayer/generated'

export async function getStaticPaths() {
    const paths = allBeings.map((being) => being.url)
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const being = allBeings.find((being) => being.name === params.slug)
    return {
        props: {
            being,
        },
    }
}

const PostLayout = ({ being }) => {
    return (
        <>
            <Head>
                <title>{being.name}</title>
            </Head>
            <article className="mx-auto max-w-2xl py-16">
                <div className="mb-6 text-center">
                    <Link href="/">
                        <a className="text-center text-sm font-bold uppercase text-blue-700">Home</a>
                    </Link>
                </div>
                <div className="mb-6 text-center">
                    <h1 className="mb-1 text-3xl font-bold">{being.name}</h1>
                </div>
                <p>Birthplace: <Link href={`/locations/${being.birthPlace.name}`}><a>{being.birthPlace.name}</a></Link></p>
                <div className="cl-post-body" dangerouslySetInnerHTML={{ __html: being.body.html }} />
            </article>
        </>
    )
}

export default PostLayout
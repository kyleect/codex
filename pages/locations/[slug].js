import { allLocations } from 'contentlayer/generated'

export async function getStaticPaths() {
    const paths = allLocations.map((location) => location.url)
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const location = allLocations.find((location) => location.name === params.slug)
    return {
        props: {
            location,
        },
    }
}

const PostLayout = ({ location }) => {
    return (
        <>
            <h2>Locations</h2>

            <article className="mx-auto max-w-2xl py-16">
                <div className="mb-6 text-center">
                    <h3 className="mb-1 text-3xl font-bold">{location.name}</h3>
                </div>
                <div className="cl-post-body" dangerouslySetInnerHTML={{ __html: location.body.html }} />
            </article>
        </>
    )
}

export default PostLayout
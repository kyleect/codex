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
            <h2>Beings</h2>

            <article className="mx-auto max-w-2xl py-16">
                <div className="mb-6 text-center">
                    <h3 className="mb-1 text-3xl font-bold">{being.name}</h3>
                </div>
                <div className="cl-post-body" dangerouslySetInnerHTML={{ __html: being.body.html }} />
            </article>
        </>
    )
}

export default PostLayout
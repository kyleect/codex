import { allThings, Thing } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { mdxComponents } from "src";

export async function getStaticPaths() {
  const paths = allThings.map((thing) => thing.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const thing = allThings.find((thing) => thing.name === params.slug);
  return {
    props: {
      thing,
    },
  };
}

type Props = {
  thing: Thing;
};

const ViewThing = ({ thing }: Props) => {
  const MDX = useMDXComponent(thing.body.code);

  return (
    <>
      <h2>Things</h2>

      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <h3 className="mb-1 text-3xl font-bold">{thing.name}</h3>
        </div>
        <MDX components={mdxComponents} />
      </article>
    </>
  );
};

export default ViewThing;

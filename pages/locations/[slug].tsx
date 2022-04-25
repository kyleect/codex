import { allLocations, Location as ViewLocation } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { mdxComponents } from "src";

export async function getStaticPaths() {
  const paths = allLocations.map((location) => location.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const location = allLocations.find(
    (location) => location.name === params.slug
  );
  return {
    props: {
      location,
    },
  };
}

type Props = {
  location: ViewLocation;
};

const ViewLocation = ({ location }: Props) => {
  const MDX = useMDXComponent(location.body.code);

  return (
    <>
      <h2>Locations</h2>

      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <h3 className="mb-1 text-3xl font-bold">{location.name}</h3>
        </div>
        <MDX components={mdxComponents} />
      </article>
    </>
  );
};

export default ViewLocation;

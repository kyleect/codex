import { Heading } from "@chakra-ui/react";
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
      <Heading marginBottom={5}>Locations</Heading>

      <article>
        <Heading as="h3" marginBottom={5}>
          {location.name}
        </Heading>

        <MDX components={mdxComponents} />
      </article>
    </>
  );
};

export default ViewLocation;

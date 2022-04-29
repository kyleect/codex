import { Box, Heading, Tag } from "@chakra-ui/react";
import { Article } from "components/Article";
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
    <Article
      main={
        <>
          <Heading as="h3" marginBottom={5}>
            {thing.name}
          </Heading>

          <Box pb={5}>
            <Tag>Thing</Tag>
          </Box>

          <MDX components={mdxComponents} />
        </>
      }
    />
  );
};

export default ViewThing;

import { Divider, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import BeingLink from "components/BeingLink";
import { allBeings, Being } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { mdxComponents } from "src";

export async function getStaticPaths() {
  const paths = allBeings.map((being) => being.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const being = allBeings.find((being) => being.name === params.slug);
  return {
    props: {
      being,
    },
  };
}

type Props = {
  being: Being;
};

const ViewBeing = ({ being }: Props) => {
  const MDX = useMDXComponent(being.body.code);

  return (
    <>
      <Heading marginBottom={5}>Beings</Heading>

      <article>
        <Heading as="h3" marginBottom={5}>
          {being.name}
        </Heading>

        {being.aliases && (
          <>
            <Heading as="h4" my={5}>
              Aliases
            </Heading>

            <UnorderedList>
              {being.aliases.map((alias, i) => {
                return (
                  <ListItem key={i}>
                    <BeingLink name={alias} />
                  </ListItem>
                );
              })}
            </UnorderedList>
          </>
        )}

        <Heading as="h4" my={5}>
          Description
        </Heading>

        <MDX components={mdxComponents} />
      </article>
    </>
  );
};

export default ViewBeing;

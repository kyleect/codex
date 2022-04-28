import {
  Box,
  Divider,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import BeingLink from "components/BeingLink";
import LocationLink from "components/LocationLink";
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
      <article>
        <Heading as="h3">{being.name}</Heading>

        <Flex direction="row-reverse" justifyContent="flex-end">
          <Box p={3}>
            {being.aliases && (
              <>
                <Heading as="h4" my={5} size="lg">
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

            {being.placeOfOrigin && (
              <>
                <Heading as="h4" my={5} size="lg">
                  Place Of Origin
                </Heading>

                <LocationLink name={being.placeOfOrigin} />
              </>
            )}

            {being.placeOfResidence && (
              <>
                <Heading as="h4" my={5} size="lg">
                  Place Of Residence
                </Heading>

                <LocationLink name={being.placeOfResidence} />
              </>
            )}
          </Box>

          <Box>
            <Heading as="h4" my={5} size="lg">
              Description
            </Heading>

            <MDX components={mdxComponents} />
          </Box>
        </Flex>
      </article>
    </>
  );
};

export default ViewBeing;

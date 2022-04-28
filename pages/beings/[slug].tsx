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

        <Flex
          direction="row-reverse"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <Box py={3} mx={5} flexGrow={1}>
            {being.aliases && (
              <Box mb={5}>
                <Heading as="h4" size="lg" pb={5}>
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
              </Box>
            )}

            {being.placeOfOrigin && (
              <Box mb={5}>
                <Heading as="h4" size="lg" pb={5}>
                  Place Of Origin
                </Heading>

                <LocationLink name={being.placeOfOrigin} />
              </Box>
            )}

            {being.placeOfResidence && (
              <Box mb={5}>
                <Heading as="h4" size="lg" pb={5}>
                  Place Of Residence
                </Heading>

                <LocationLink name={being.placeOfResidence} />
              </Box>
            )}
          </Box>

          <Box py={3} flexGrow={4}>
            <Heading as="h4" size="lg" pb={5}>
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

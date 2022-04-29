import { Box, Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import BeingLink from "components/BeingLink";
import { allLocations, allBeings, Location } from "contentlayer/generated";
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
  location: Location;
};

const ViewLocation = ({ location }: Props) => {
  const MDX = useMDXComponent(location.body.code);

  const residents = allBeings.filter(
    (being) => being.placeOfResidence === location.name
  );

  return (
    <>
      <article>
        <Flex>
          <Box py={3} flexGrow={4}>
            <Heading as="h3" marginBottom={5}>
              {location.name}
            </Heading>

            <MDX components={mdxComponents} />
          </Box>

          <Box py={3} mx={5} flexGrow={1}>
            {residents.length > 0 && (
              <Box mb={5}>
                <Heading as="h4" size="lg" pb={5}>
                  Residents
                </Heading>

                <UnorderedList>
                  {residents.map((resident, i) => {
                    return (
                      <ListItem key={i}>
                        <BeingLink name={resident.name} />
                      </ListItem>
                    );
                  })}
                </UnorderedList>
              </Box>
            )}
          </Box>
        </Flex>
      </article>
    </>
  );
};

export default ViewLocation;

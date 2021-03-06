import { Box, Heading, ListItem, Tag, UnorderedList } from "@chakra-ui/react";
import { Article } from "components/Article";
import BeingLink from "components/BeingLink";
import { InfoPanel } from "components/InfoPanel";
import LocationLink from "components/LocationLink";
import {
  allLocations,
  allBeings,
  Location,
  Being,
} from "contentlayer/generated";
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

  const limitResidentsTo = 5;

  const residents = allBeings
    .slice(0, limitResidentsTo)
    .filter((being) => being.placeOfResidence === location.name);

  const destinations = allLocations.filter((l) => l.located === location.name);

  return {
    props: {
      location,
      residents,
      destinations,
    },
  };
}

type Props = {
  location: Location;
  residents: Being[];
  destinations: Location[];
};

const ViewLocation = ({ location, destinations, residents }: Props) => {
  const MDX = useMDXComponent(location.body.code);

  return (
    <Article
      main={
        <>
          <Heading as="h3" marginBottom={5}>
            {location.name}
          </Heading>

          <Box pb={5}>
            <Tag>Location</Tag>
          </Box>

          <MDX components={mdxComponents} />
        </>
      }
      side={
        <>
          {location.located && (
            <InfoPanel as="h4" title="Located">
              <LocationLink name={location.located} />
            </InfoPanel>
          )}

          {destinations.length > 0 && (
            <InfoPanel as="h4" title="Locations">
              <UnorderedList>
                {destinations.map((destination, i) => (
                  <ListItem key={i}>
                    <LocationLink name={destination.name} />
                  </ListItem>
                ))}
              </UnorderedList>
            </InfoPanel>
          )}

          {residents.length > 0 && (
            <InfoPanel as="h4" title="Residents">
              <UnorderedList>
                {residents.map((resident, i) => (
                  <ListItem key={i}>
                    <BeingLink name={resident.name} />
                  </ListItem>
                ))}
              </UnorderedList>
            </InfoPanel>
          )}
        </>
      }
    />
  );
};

export default ViewLocation;

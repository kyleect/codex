import { Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { Article } from "components/Article";
import BeingLink from "components/BeingLink";
import { InfoPanel } from "components/InfoPanel";
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
    <Article
      main={
        <>
          <Heading as="h3" marginBottom={5}>
            {location.name}
          </Heading>

          <MDX components={mdxComponents} />
        </>
      }
      side={
        <>
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

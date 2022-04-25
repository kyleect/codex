import Link from "next/link";
import { allLocations, Location } from "contentlayer/generated";
import { Heading, ListItem, UnorderedList } from "@chakra-ui/react";

export async function getStaticProps() {
  return { props: { locations: allLocations } };
}

type Props = {
  locations: Location[];
};

export default function ListLocations({ locations }: Props) {
  return (
    <>
      <Heading marginBottom={5}>Locations</Heading>

      <UnorderedList>
        {locations.map((location, idx) => (
          <ListItem key={idx}>
            <Link href={location.url}>
              <a>{location.name}</a>
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
}

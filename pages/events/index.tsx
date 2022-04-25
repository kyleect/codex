import Link from "next/link";
import { allEvents, Event } from "contentlayer/generated";
import { Heading, ListItem, UnorderedList } from "@chakra-ui/react";

export async function getStaticProps() {
  return { props: { events: allEvents } };
}

type Props = {
  events: Event[];
};

export default function ListBeings({ events }: Props) {
  return (
    <>
      <Heading marginBottom={5}>Events</Heading>

      <UnorderedList>
        {events.map((event, idx) => (
          <ListItem key={idx}>
            <Link href={event.url}>
              <a>{event.name}</a>
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
}

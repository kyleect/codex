import Link from "next/link";
import { allEvents, Event } from "contentlayer/generated";

export async function getStaticProps() {
  return { props: { events: allEvents } };
}

type Props = {
  events: Event[];
};

export default function ListBeings({ events }: Props) {
  return (
    <>
      <h2>Events</h2>

      <ul>
        {events.map((event, idx) => (
          <li key={idx}>
            <Link href={event.url}>
              <a className="text-blue-700 hover:text-blue-900">{event.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

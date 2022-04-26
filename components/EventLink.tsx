import Link from "next/link";
import { allEvents } from "contentlayer/generated";

type Props = {
  name: string;
};

export default function EventLink({ name }: Props) {
  const event = allEvents.find((event) => event.name === name);

  return event ? (
    <Link href={event.url}>
      <a>{event.name}</a>
    </Link>
  ) : (
    <span>{name}</span>
  );
}

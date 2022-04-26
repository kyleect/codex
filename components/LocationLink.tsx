import Link from "next/link";
import { allLocations } from "contentlayer/generated";

type Props = {
  name: string;
};

export default function LocationLink({ name }: Props) {
  const location = allLocations.find((location) => location.name === name);

  return location ? (
    <Link href={location.url}>
      <a>{location.name}</a>
    </Link>
  ) : (
    <span>{name}</span>
  );
}

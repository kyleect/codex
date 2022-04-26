import Link from "next/link";
import { allThings } from "contentlayer/generated";

type Props = {
  name: string;
};

export default function ThingLink({ name }: Props) {
  const thing = allThings.find((thing) => thing.name === name);

  return thing ? (
    <Link href={thing.url}>
      <a>{thing.name}</a>
    </Link>
  ) : (
    <span>{name}</span>
  );
}

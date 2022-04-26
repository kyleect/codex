import Link from "next/link";
import { Being, allBeings } from "contentlayer/generated";

type Props = {
  name: string;
};

export default function BeingLink({ name }: Props) {
  const being = allBeings.find((being) => being.name === name);

  return being ? (
    <Link href={being.url}>
      <a>{being.name}</a>
    </Link>
  ) : (
    <span>{being.name}</span>
  );
}

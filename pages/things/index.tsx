import Link from "next/link";
import { allThings, Thing } from "contentlayer/generated";

export async function getStaticProps() {
  return { props: { things: allThings } };
}

type Props = {
  things: Thing[];
};

export default function ListBeings({ things }: Props) {
  return (
    <>
      <h2>Things</h2>

      <ul>
        {things.map((thing, idx) => (
          <li key={idx}>
            <Link href={thing.url}>
              <a className="text-blue-700 hover:text-blue-900">{thing.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

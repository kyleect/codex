import Link from "next/link";
import { allBeings, Being } from "contentlayer/generated";

export async function getStaticProps() {
  return { props: { beings: allBeings } };
}

type Props = {
  beings: Being[];
};

export default function Home({ beings }: Props) {
  return (
    <>
      <h2>Beings</h2>

      <ul>
        {beings.map((being, idx) => (
          <li key={idx}>
            <Link href={being.url}>
              <a className="text-blue-700 hover:text-blue-900">{being.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

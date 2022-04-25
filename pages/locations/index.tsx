import Link from "next/link";
import { allLocations, Location } from "contentlayer/generated";

export async function getStaticProps() {
  return { props: { locations: allLocations } };
}

type Props = {
  locations: Location[];
};

export default function Home({ locations }: Props) {
  return (
    <>
      <h2>Locations</h2>

      <ul>
        {locations.map((location, idx) => (
          <li key={idx}>
            <Link href={location.url}>
              <a className="text-blue-700 hover:text-blue-900">
                {location.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
